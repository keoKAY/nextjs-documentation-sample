import React from "react";
import ReactMarkdown from "react-markdown";
import { SyntaxHighlighter } from "react-syntax-highlighter";

// You can choose any style from react-syntax-highlighter/styles/prism
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const GuideDocument = ({ content, data }) => {
  if (!data) return <p> Loading.......!</p>;

  return (
    <article>
      <h1>{data.title}</h1>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

//
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "app/documentations/introduction.mdx",
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return { props: { content, data } };
}

export default GuideDocument;
