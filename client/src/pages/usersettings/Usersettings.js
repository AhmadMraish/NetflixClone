import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./usersettings.scss";

const Usersettings = () => {
  return (
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

        {/* main */}
      </div>
    </div>
    </div>
  );
};

export default Usersettings;
