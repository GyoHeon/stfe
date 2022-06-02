import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const UserProfile = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          TWITTER
          <br />0
        </div>,
        <div key="followings">
          FOLLOWINGS
          <br />0
        </div>,
        <div key="followers">
          FOLLOWERS
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title="GOYHEONLEE" avatar={<Avatar>GHL</Avatar>} />
      <Button onClick={onLogOut}>LOGOUT</Button>
    </Card>
  );
};

export default UserProfile;
