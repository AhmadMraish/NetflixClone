import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  const addMovie = async (movie) => {
    let favMovie = movie._id;
    let movieTitle = movie.title;
    let movieImg = movie.img;
    let movieDesc = movie.desc;
    let movieTrailer = movie.trailer;
    let movieVideo = movie.video;

    let userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log("test test test", userId);
    // need to send user id
    try {
      const res = await axios.post(
        `/users/addmovietofavourite`,
        {
          favMovie,
          userId,
          movieTitle,
          movieImg,
          movieDesc,
          movieTrailer,
          movieVideo,
        },
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      console.log("test", res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.imgSm} alt="" />
      {isHovered && (
        <>
          {/* <iframe className="video"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/q_KD-ILAYwM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe> */}
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to={`/watch`} state={{ from: movie }}>
                <PlayArrow className="icon" />
              </Link>
              <Add onClick={() => addMovie(movie)} className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.title}</span>
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}

/*
{
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzY0MWRiODBmNTM0YmZiYmU1MTk5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQ1NTE4NiwiZXhwIjoxNjQwODg3MTg2fQ.8If0R-MQUmpY61XrhSLUUrr5b9XhK16u-rMpi2xRqQ8",
          },
        }

<Link to={`/watch`} state={{ from: movie }}>

Pass props via Link component in React Router v6 by a separate prop called state like <Link to="/" state={{ foo: bar }}>.
Example:

   <Link
      to={`/login`}
      state={{ from: "the-page-id" }}
   >
      Login to see this page
   </Link>

And retrieve it using useLocation() hook:

import { useLocation } from "react-router-dom";

  const location = useLocation();
  const {{ from }} = location.state;
  console.log(from); // output: "the-page-id"

This should be used with function components only not class components.
*/
