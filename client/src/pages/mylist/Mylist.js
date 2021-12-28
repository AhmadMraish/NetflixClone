import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./mylist.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  DeleteOutline
} from "@material-ui/icons";


const Mylist = () => {
  const [isHovered, setIsHovered] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let index = 5;
  return (
    <div className="mylist">
      <Navbar />
      <div className="outtercontainer">
        <span>My List</span>
      </div>

      <div className="middlecontainer">
        <Card className="cardcontainer">
          <Card.Img className="cardimg" variant="top" src="https://i.imgur.com/P58p0cD.jpg" />
          <Card.Body className="cardbody">
            <Card.Title className="cardtitle">Card Title</Card.Title>
            <Card.Text className="cardtext">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="cardicons">
            <PlayArrow/>
            <DeleteOutline/>
            </div>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Mylist;
