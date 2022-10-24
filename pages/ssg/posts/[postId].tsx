import React from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

type Post = {
  id: number;
  title: string;
  author: string;
};

type Props = {
  post: Post;
};

interface IParams extends ParsedUrlQuery {
  postId: string;
}

const Post = (props: Props) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h2>Loading ...</h2>;
  // }

  return <div className="container">{props.post.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await response.json();

  const paths = posts.map((p) => {
    return {
      params: { postId: `${p.id}` },
    };
  });

  return {
    paths: paths.slice(0, 2),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params as IParams;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default Post;
