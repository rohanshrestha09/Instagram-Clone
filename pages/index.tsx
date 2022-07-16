import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Post from "../components/Post";
import Profile from "../components/Profile";
import Story from "../components/Story";

interface Props {
  stories: { username: string; imgurl: string }[];
  posts: {
    username: string;
    logourl: string;
    posturl: string;
    likes: string;
    comments: string;
    time: string;
  }[];
  profile: { username: string; imgurl: string; desc: string }[];
}

const Home: NextPage<Props> = ({ stories, posts, profile }) => {
  return (
    <div className="w-screen flex flex-col items-center font-sans md:pr-4 bg-[#FAFAFA]">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="md:w-[51.5rem] w-full grid grid-cols-7 my-[26px] md:px-0 px-2">
        <div className="md:col-span-4 col-span-full">
          <Story stories={stories} />
          <Post posts={posts} />
        </div>
        <div className="col-span-3">
          <Profile profile={profile} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stories: { username: string; imgurl: string }[] = [
    {
      username: "rohan_shrestha.js",
      imgurl:
        "https://i.pinimg.com/736x/f0/6b/ea/f06bea95d2c425676a1a531f0c7159fe.jpg",
    },
    {
      username: "diapce.bohora",
      imgurl:
        "https://th.bing.com/th/id/R.ce68b28b9bfd195b06c4affcea294893?rik=5NQ3wVvYtMVN0Q&pid=ImgRaw&r=0",
    },
    {
      username: "nikkey_25",
      imgurl:
        "https://th.bing.com/th/id/R.dfebb46ae232a547b3e10b87c2fc63d9?rik=ubGdwOHXVYnwkA&pid=ImgRaw&r=0",
    },
    {
      username: "shree_735",
      imgurl:
        "https://th.bing.com/th/id/OIP.cXJJgZaD5pDhBRIVxYWfyQHaHa?pid=ImgDet&rs=1",
    },
    {
      username: "hahaha_sin",
      imgurl:
        "https://th.bing.com/th/id/R.b5e4415ae574c65c25a68c0151afa7c0?rik=w5gxKmwIfdCp8Q&pid=ImgRaw&r=0",
    },
  ];

  const profile: { username: string; imgurl: string; desc: string }[] = [
    {
      username: "_unique.mj",
      imgurl:
        "https://th.bing.com/th/id/R.7f092ae69533de4da3eb93fac3f9d269?rik=P1EaUKYtBVmLCQ&pid=ImgRaw&r=0",
      desc: "Followed by hahaha_sin + 29 more",
    },
    {
      username: "syau_bro",
      imgurl:
        "https://www.ourteennetwork.com/cacheimagenes/px750-188678398.jpg",
      desc: "Followed by shree_735 + 44 more",
    },
    {
      username: "timewear_",
      imgurl:
        "https://th.bing.com/th/id/R.69600e9dd8c0e432ec3f8983277ceff7?rik=iyuZTVr2Ig13hQ&pid=ImgRaw&r=0",
      desc: "New to Instagram",
    },
    {
      username: "khanalrahul7912",
      imgurl:
        "https://th.bing.com/th/id/OIP.qYRqZZbheIVH0CiZdQcWPAHaHO?pid=ImgDet&rs=1",
      desc: "Followed by dipace.bohora + 6 more",
    },
    {
      username: "sujitbhtr2000",
      imgurl:
        "https://th.bing.com/th/id/R.a2da5c60963b4c655460188d1dded050?rik=viO3wxbdVUprIA&pid=ImgRaw&r=0",
      desc: "New to Instagram",
    },
  ];

  const posts: {
    username: string;
    logourl: string;
    posturl: string;
    likes: string;
    comments: string;
    time: string;
  }[] = [
    {
      username: "routineofnepalbanda",
      logourl: "/images/ronb.jpg",
      posturl: "/images/ronbpost.jpg",
      likes: "10,301 likes",
      comments: "View all 23 comments",
      time: "23 HOURS AGO",
    },
    {
      username: "itsnporg",
      logourl: "/images/itsnp.png",
      posturl: "/images/itsnppost.png",
      likes: "568 likes",
      comments: "View all 72 comments",
      time: "7 HOURS AGO",
    },
    {
      username: "kittisaurus.villains",
      logourl: "/images/lulu.jpg",
      posturl: "/images/lulupost.jpg",
      likes: "715 likes",
      comments: "View all 21 comments",
      time: "2 DAYS AGO",
    },
    {
      username: "99problems",
      logourl: "/images/99problems.jpg",
      posturl: "/images/99problemspost.jpg",
      likes: "2,100 likes",
      comments: "View all 2,000 comments",
      time: "5 MINUTES AGO",
    },
    {
      username: "intern_nepal",
      logourl: "/images/internnepal.jpg",
      posturl: "/images/internnepalpost.jpg",
      likes: "24 likes",
      comments: "View all 2 comments",
      time: "58 MINUTES AGO",
    },
  ];

  return {
    props: { stories, posts, profile },
  };
};

export default Home;
