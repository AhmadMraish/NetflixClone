import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbarlist.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useEffect } from "react";

const Navbarlist = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);


  const [ismylist, setIsMylist] = useState(false)
  const [ishomepage, setIsHomePage] = useState(true)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

// useEffect(() => {
  
//   return () => {
    
//   }
// }, [ismylist,ishomepage])

  const handleMylist = () =>{
    
    setIsHomePage(false)
    setIsMylist(true)

    console.log("list 2 mraish", ismylist)
    console.log("list 2 mraish", ishomepage)
    
  }

  const handleMyHomePage = () =>{
    setIsMylist(false)
    setIsHomePage(true)
    console.log("list 5 batata", ismylist)
    console.log("list 5 batata", ishomepage)
    
  }


  return (
<>

    
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link  to="/" className="link">
            <span onClick={handleMyHomePage}>Homepage</span>
          </Link>
          {/* <Link  to="/mylist" className="link">
            <span onClick={handleMylist}>My List</span>
          </Link> */}
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://scontent.famm11-1.fna.fbcdn.net/v/t31.18172-8/11357284_10155710469880525_7164636631488032966_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6MFWiBJNpOEAX9tt8kW&tn=0PHH23xpLMPr26f7&_nc_ht=scontent.famm11-1.fna&oh=00_AT9qeM474Ltc3rGX6AP5v9EM8n_dFTlCMkVe6r0SbfB49Q&oe=61F09CB5"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );// end return
}; // end function

export default Navbarlist;
