import { Person } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const UserAvatar = ({ userImg }) => {
  return (
    <Avatar>
      {userImg ? (
        <img src={userImg} alt="user avatar" width="100%" />
      ) : (
        <Person />
      )}
    </Avatar>
  );
};

export default UserAvatar;
