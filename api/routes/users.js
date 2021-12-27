const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");
//UPDATE
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only update your own account");
  }
});
//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can only delete your own account");
  }
});
//GET     fitch one user by id
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL USERS or limit them
router.get("/", verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(10)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not permited to see all users");
  }
});
//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


// const blabla = (req, res) => {
//   // console.log("request",req,"request")
//   const _id = req.params.id;

//   const curruntuser = req.token.userId;

//   User.findById(curruntuser).then((result) => {
//     if (!result.blabla.includes(_id)) {
//       User.updateOne(
//         { _id: curruntuser },
//         { $push: { blabla: _id } }
//       ).exec();
//       res.status(200).json("blabla sccesfully");
//     } else {
//       User.updateOne(
//         { _id: curruntuser },
//         { $pull: { blabla: _id } }
//       ).exec();
//       res.status(200).json("blabla sccesfully");
//     }
//   });
// };

router.post("/addmovietofavourite", async (req, res) => {
  // console.log("ouou", res)
  //  console.log("Mraish 2", req.body)
   
  const newMovie = req.body.favMovie;
  // console.log("new",req.body.favMovie)
  const currentUser = req.body.userId
  // console.log("User",req.body.userId)
  User.findById(currentUser).then((result) => {
    if (result) {
      User.updateOne(
        { _id: currentUser },
        { $push: { favourite: newMovie } }
      ).exec();
      res.status(200).json("fav video added");
    }
  });
});

module.exports = router;
