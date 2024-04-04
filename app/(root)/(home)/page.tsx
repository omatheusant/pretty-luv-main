import PostCard from "@/components/shared/PostCard";
import React from "react";

const posts = [
  {
    _id: "1",
    imageUrl: "/assets/images/car.jpg",
    author: {
      _id: "101",
      name: "John Doe",
      avatarUrl: "/assets/images/john-doe.jpg",
    },
    views: 150,
    likes: 20,
  },
  {
    _id: "2",
    imageUrl: "/assets/images/bts.jpg",
    author: {
      _id: "102",
      name: "Alice Smith",
      avatarUrl: "/assets/images/korean-avatar.jpg",
    },
    views: 200,
    likes: 30,
  },
  {
    _id: "3",
    imageUrl: "/assets/images/bts2.jpg",
    author: {
      _id: "103",
      name: "Bob Johnson",
      avatarUrl: "/assets/images/bob.jpg",
    },
    views: 120,
    likes: 15,
  },
];

const Home = async () => {
  return (
    <section className="mt-16 flex w-full flex-col items-center gap-12">
      {posts.map((post) => (
        <>
          <PostCard
            key={post._id}
            imageUrl={post.imageUrl}
            author={post.author}
            likes={post.likes}
            views={post.views}
          />
        </>
      ))}
    </section>
  );
};

export default Home;
