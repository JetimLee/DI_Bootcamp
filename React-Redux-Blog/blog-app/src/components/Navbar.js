import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
//can write && if you don't want a secondary condition, ie, using a ternary operator

const Navbar = () => {
  const [inputValue, setInputValue] = useState("israel");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  const handleClick = (e) => {};
  return (
    <div className="navbar">
      <h1 className="navbar__header">Blogfun</h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            className="search"
            placeholder="search blogs"
            value={inputValue}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search Blogs
          </button>
        </div>
      )}
      {isSignedIn ? (
        <div className="navbar__user__data">
          <Avatar src={userData?.imageUrl} alt={userData?.name} />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="592661744956-b2udjfopeqtncqd6s09up3625hsb2ad3.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
