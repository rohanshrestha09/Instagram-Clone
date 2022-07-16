import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  smiley,
  heart,
  comment,
  direct,
  bookmark,
} from "../public/images/logos";

interface Props {
  posts: {
    username: string;
    logourl: string;
    posturl: string;
    likes: string;
    comments: string;
    time: string;
  }[];
}

const Post: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((element: any, index: number) => (
        <div
          className="w-full border border-gray-300 rounded-lg mt-4"
          key={index}
        >
          <div className="h-14 flex justify-between items-center px-3">
            <span className="flex items-center cursor-pointer">
              <img
                src={element.logourl}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-semibold px-3 text-slate-800">
                {element.username}
              </p>
            </span>
            <HiOutlineDotsHorizontal
              size={20}
              className="text-slate-800 cursor-pointer"
            />
          </div>

          <img src={element.posturl} alt="" className="h-[28rem] w-full" />

          <div className="h-12 flex justify-between items-center px-3 text-slate-800">
            <span className="basis-[6.8rem] flex justify-between">
              {[heart, comment, direct].map((el, index) => (
                <span key={index}>{el}</span>
              ))}
            </span>
            {bookmark}
          </div>

          <div className="h-[5.5rem] flex flex-col justify-between px-3 pb-3 text-slate-700">
            <p className="text-sm font-semibold cursor-pointer">
              {element.likes}
            </p>
            <p className="text-sm font-semibold cursor-pointer">
              {element.comments}
            </p>
            <p className="text-xs font-normal text-gray-400">{element.time}</p>
          </div>

          <div className="h-12 flex items-center justify-between border-t px-3">
            <span className="flex">
              <span className="cursor-pointer">{smiley}</span>
              <input
                type="text"
                placeholder="Add a comment..."
                className="border-0 outline-none text-sm mx-3"
              />
            </span>
            <p className="text-sm font-semibold text-blue-500 cursor-pointer">
              Post
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
