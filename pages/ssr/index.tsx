import React from "react";
import type { GetServerSideProps } from "next";

type Comment = {
  id: string;
  body: string;
  postId: string;
};

type Props = {
  comments: Comment[];
};

const SSR = (props: Props) => {
  return (
    <div className="container">
      Server side Rendering Comment:
      <br></br>
      {props.comments.map((p) => {
        return <p key={p?.id}>{p?.body}</p>;
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const comments = await response.json();
  console.log('SSR - Fetched')

  return {
    props: {
      comments,
    },
  };
};

export default SSR;
