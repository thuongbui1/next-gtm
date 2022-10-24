import React from "react";
import Link from "next/link";

type Props = {};

const SSG = (props: Props) => {
  return (
    <div className="container">
      SSG without Data
      <br />
      {/* <div style={{ height: 1500 }}></div> */}
      <Link href="/ssg/posts" prefetch={false}>
        <a>Go to posts</a>
      </Link>
    </div>
  );
};

export default SSG;
