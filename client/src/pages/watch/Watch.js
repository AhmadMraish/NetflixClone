import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

/*
And retrieve it using useLocation() hook:

import { useLocation } from "react-router-dom";

  const location = useLocation();
  const {{ from }} = location.state;
  console.log(from); // output: "the-page-id"
*/
export default function Watch() {
  const location = useLocation();
  
  // this.props.location.state
   console.log("loca",location)
  const movie = location.state.from.video
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay={true} progress="true" controls={true} src={movie} />
    </div>
  );
}

/*
<video className="video" muted={true} progress="true" controls={true} src={content.trailer} />
*/