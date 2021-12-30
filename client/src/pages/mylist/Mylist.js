import React from "react";
import Navbarlist from "../../components/navbarlist/Navbarlist";
import "./mylist.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline,
} from "@material-ui/icons";

const Mylist = () => {
  let moviearray = JSON.parse(localStorage.getItem("user")).default;

  return (
    <div className="mylist">
      <Navbarlist />
      <div className="outtercontainer">
        <span>My List</span>
      </div>

      <div className="middlecontainer">
        {moviearray &&
          moviearray.map((movie, i) => (
            <Card key={i} className="cardcontainer">
              <Card.Img className="cardimg" variant="top" src={movie.vidImg} />
              <Card.Body className="cardbody">
                <Card.Title className="cardtitle">{movie.videTitle}</Card.Title>
                <Card.Text className="cardtext">{movie.vidDesc}</Card.Text>
                <div className="cardicons">
                  
                  <PlayArrow/>
                  
                  <DeleteOutline />
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Mylist;
