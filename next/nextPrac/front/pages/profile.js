import Head from "next/head";
import AppLayout from "../src/components/AppLayout";
import NicknameEditForm from "../src/components/NicknameEditForm";
import FollowList from "../src/components/FollowList";

const Profile = () => {
  const followingList = [
    { nickname: "LGH" },
    { nickname: "ZEROCHO" },
    { nickname: "babo" },
  ];
  const followerList = [
    { nickname: "LGH" },
    { nickname: "ZEROCHO" },
    { nickname: "babo" },
  ];

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 리스트" data={followingList} />
        <FollowList header="팔로워 리스트" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
