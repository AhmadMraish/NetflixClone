const router = require("express").Router();
const User = require("../models/User");
const Movie = require("../models/Movie");
const List = require("../models/List");
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
  let newMovie = req.body.favMovie;
  console.log("newMovie", newMovie);

  let movieImg = req.body.movieImg;
  console.log("movieImg", movieImg);

  let movieDesc = req.body.movieDesc;
  console.log("movieDesc", movieDesc);

  let movieTrailer = req.body.movieTrailer;
  console.log("movieTrailer", movieTrailer);

  let movieVideo = req.body.movieVideo;
  console.log("movieVideo", movieVideo);

  let movieTitle = req.body.movieTitle;
  console.log("movieTitle", movieTitle);

  let newFavVideo = {
    vidID: newMovie,
    vidImg: movieImg,
    vidDesc: movieDesc,
    vidTrailer: movieTrailer,
    vidVideo: movieVideo,
    videTitle:movieTitle
  };
  // movieTitle

  console.log("enter", newFavVideo);

  const currentUser = req.body.userId;

  User.findById(currentUser).then((result) => {
    result &&
      User.updateOne(
        { _id: currentUser },
        { $push: { default: newFavVideo } }
      ).exec();
    res.status(200).json("added sccesfully");
  });
});
// try {
//   let data = Movie.findOne({ newMovie }).populate("title");
//   console.log("hoho", data);
//   res.status(200).json({ success: true });
//   // console.log("bebe",res)
// } catch (err) {
//   console.log(err);
//   res.status(500).json({ success: false, msg: err.message });
// }

// ({
//   path: 'user',
//   select:
//     'title desc img trailer video limit genre isSeries',
// })

// .populate({
//   path: "Movie",
//   populate: [
//     { path: "title" },
//     { path: "desc" },
//     { path: "img" },
//     { path: "trailer" },
//     { path: "video" },
//     { path: "limit" },
//     { path: "genre" },
//     { path: "isSeries" },
//   ],
// })
// .populate("User")
// .exec()
// .then((result) => {
//   console.log("test populate", result);
// });
// .populate([{path:"title",model:"Movie"},populate{path:"desc",model:"Movie"}])

module.exports = router;
