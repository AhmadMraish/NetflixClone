import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./usersettings.scss";
import Footer from "../../components/footer/Footer";

const Usersettings = () => {
  return (
      <>
    <div className="usersettings">
      <Navbar />
      <div className="backgroundsettings">
        <div className="usersettingcontainer">
          <h1 className="accountreginfo">
            Account <span className="dateinfo">Member Since May 2016</span>{" "}
          </h1>
          <hr />

          <div className="mainmembershipcontainer">
            <div className="membershipleft">
              <span className="membershiptex">Membership & Billing</span>
              <button className="cancelmembership">Cancel Membership</button>
            </div>
            <div className="membershipmiddle">
              <span className="email">ahmadmraish@hotmail.com</span>
              <span className="password">Password:******</span>
              <span className="phone">Phone:+962777777777</span>
            </div>

            <div className="membershipright">
              <a className="changeemail" href="/email">
                {" "}
                Change account email
              </a>
              <a className="changepassword" href="/password">
                Change password
              </a>
              <a className="changephone" href="/phonenumber">
                Change phone number
              </a>
            </div>
          </div>
          <hr />
          <div className="test">
            <div className="test1"></div>
            <div className="test2">
              <span>•••• •••• •••• 5421</span>
              <span>Your next billing date is January 28, 2022.</span>
            </div>
            <div className="test3">
              <a className="changeemail" href="/email">
                {" "}
                Manage payment info
              </a>
              <a className="changeemail" href="/email">
                {" "}
                Add backup payment method
              </a>
              <a className="changeemail" href="/email">
                {" "}
                Billing details
              </a>
              <a className="changeemail" href="/email">
                {" "}
                Change billing day
              </a>
            </div>
          </div>
          <hr />
          <div className="promogift">
            <a className="redeemgiftpromo" href="/email">
              {" "}
              Redeem gift card or promo code
            </a>
            <a className="buygiftcard" href="/email">
              {" "}
              Where to buy gift cards
            </a>
          </div>
          <hr />

          <div className="plandetails">
            <div className="plandetailstext">Plan Details</div>
            <div className="plandetailsimg">Premium</div>
            <div className="plandetailschangeplan">
              <a href="/email"> Change plan </a>
            </div>
          </div>
          <hr />
          <div className="settingsofprofile">
            <div className="settingsofprofilename">
              <span>Settings</span>
            </div>

            <div className="settingsofprofilenamelinks">
              <a href="/email"> Test participation </a>
              <a href="/email"> Manage download devices </a>
              <a href="/email"> Activate a device </a>
              <a href="/email"> Recent device streaming activity </a>
              <a href="/email"> Sign out of all devices </a>
              <a href="/email"> Download your personal information </a>
            </div>
            <div className="settingsempty"></div>
          </div>
          <hr />


          <div className="profileparentalcontrol">
            <header className="profileparentalcontrolheader">
              <h2 className="profileparentalcontroltext">
                Profile & Parental Controls
              </h2>
            </header>

            <section className="profileparentalcontrolsection">
              <ul className="mainprofiles">
                <li className="single-profile">
                  <div className="profile-header">
                    <img className="profile-inner-image"  src="https://scontent.famm11-1.fna.fbcdn.net/v/t31.18172-8/11357284_10155710469880525_7164636631488032966_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6MFWiBJNpOEAX9tt8kW&tn=0PHH23xpLMPr26f7&_nc_ht=scontent.famm11-1.fna&oh=00_AT9qeM474Ltc3rGX6AP5v9EM8n_dFTlCMkVe6r0SbfB49Q&oe=61F09CB5"></img>
                        <div className="profile-summary">
                            <h3>Ahmad</h3>
                            <div className="amr">All Maturity Ratings</div>
                        </div>
                        <button className="profile-button">+</button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Usersettings;
