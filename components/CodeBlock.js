import { SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ language, children }) => {
  return (
    <SyntaxHighlighter style={dark} language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
