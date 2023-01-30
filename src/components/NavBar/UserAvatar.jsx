import { Person } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserAvatar = ({ userImg }) => {
  return (
    <Tooltip title="User profile">
      <Link to="/user-profile">
        <Avatar>
          {userImg ? (
            <img src={userImg} alt="user " width="100%" />
          ) : (
            <Person />
          )}
        </Avatar>
      </Link>
    </Tooltip>
  );
};

export default UserAvatar;
