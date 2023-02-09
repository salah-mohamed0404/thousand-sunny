import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";

const UserProfileButton = ({ userImg }) => {
  return (
    <Tooltip title="User profile">
      <Link to="/user-profile">
        <UserAvatar userImg={userImg} />
      </Link>
    </Tooltip>
  );
};

export default UserProfileButton;
