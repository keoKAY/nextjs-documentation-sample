import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import matter from "gray-matter";
const MDXLayout = ({ children, source }) => {
  // parsing the source using gray-matter
  let content, data;
  if (source) {
    const parsed = matter(source);
    content = parsed.content;
    data = parsed.data;
  }
  return (
    <article>
      <h1> {data?.title} </h1>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <CodeBlock
                value={String(children).replace(/\n$/, "")}
                language={node?.lang}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {source}
      </ReactMarkdown>
      {children}
    </article>
  );
};

export default MDXLayout;
