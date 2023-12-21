import Image from "next/image";
import Introduction from "./docs/introduction.mdx";
import MDXLayout from "@/components/MDXLayout";
export default function Home() {
  return (
    <section>
      <h1> Hello world ! </h1>
      <MDXLayout>
        <Introduction />
      </MDXLayout>
    </section>
  );
}
