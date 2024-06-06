import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replices={432} postImg="/post1.png" postTitle="Let's talk about threads."/>
      <UserPost likes={422} replices={12} postImg="/post2.png" postTitle="Nice tutorial."/>
      <UserPost likes={133} replices={32} postImg="/post3.png" postTitle="I love this guy."/>
      <UserPost likes={4223} replices={123} postImg="" postTitle="This is my first threads."/>
    </>
  );
};

export default UserPage;
