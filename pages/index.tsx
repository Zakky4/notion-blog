// import { GetStaticProps } from "next";
import Head from "next/head";
// import Link from "next/link";
// import SinglePost from "../components/Post/SinglePost";
// import Tag from "../components/Tag/Tag";
// import { getAllTags, getPostsForTopPage } from "../lib/notionAPI";
import { getAllPosts, getAllPostsForToppage } from "../lib/notionAPI";
import SinglePost from "@/components/Post/SinglePost";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  // const allPosts = await getAllPosts();
  const fourPosts = await getAllPostsForToppage(4);

  return {
    props: {
      fourPosts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default function Home({ fourPosts }) {
  // console.log(allPosts)
  return (
    <div className="container h-full w-full mx-auto">
      <Head>
        <title>Notion Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16">
          Notion Blog🚀
        </h1>
        {fourPosts.map((post) => (
          <div className="mx-4">
            <SinglePost
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
            />
          </div>
        ))}
      </main>
    </div>
  );
}