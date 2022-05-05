import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
