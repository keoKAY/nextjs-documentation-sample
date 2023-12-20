import React from "react";
import matter from "gray-matter";

const MDXLayout = ({ children, source }) => {
  const { content, data } = matter(source);
  return (
    <article>
      <h1>{data.title}</h1>

      <div>{children}</div>
    </article>
  );
};

export default MDXLayout;
