import React from "react";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

const ListPost = ({ posts }: Props) => {
  const router = useRouter();

  const handleClickPost = (postId: number) => {
    router.push(`/ssg/posts/${postId}`);
  };

  return (
    <div className="container">
      <h2>List post for: </h2>
      {posts.map((post) => {
        return (
          <div key={post.id} onClick={() => handleClickPost(post.id)}>
            {`${post.title} - ${post.body}`} <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default ListPost;
