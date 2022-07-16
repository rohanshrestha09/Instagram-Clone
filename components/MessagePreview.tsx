import { Dispatch, SetStateAction } from "react";
import { arrow, mesg } from "../public/images/logos";

interface Props {
  chatRoomToggle: boolean;
  setChatRoomToggle: Dispatch<SetStateAction<boolean>>;
  getIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
  db: { name: string; imgurl: string; mesg: string[] }[];
}

const MessagePreview: React.FC<Props> = ({
  chatRoomToggle,
  setChatRoomToggle,
  setIndex,
  getIndex,
  db,
}) => {
  return (
    <div
      className={`${
        chatRoomToggle ? "hidden" : "flex"
      } h-full border-0 border-r-2 w-full md:col-span-3 col-span-full md:flex flex-col items-center`}
    >
      <div className="w-full py-4 px-2 flex item-center justify-center font-medium border-0 border-b-2">
        rohan_shrestha.js
        <span className="px-2 rotate-180">{arrow}</span>
        <span className="absolute md:ml-72 right-10 md:right-auto cursor-pointer">
          {mesg}
        </span>
      </div>
      <div className="overflow-scroll overflow-x-hidden w-full flex flex-col items-center h-[79.5vh]">
        {db.map((element, index) => (
          <div
            onClick={(): void => {
              setChatRoomToggle(true);
              setIndex(index);
            }}
            className={`flex w-full justify-between items-center h-16 px-5 cursor-pointer ${
              chatRoomToggle &&
              getIndex === index &&
              "bg-[#EFEFEF] pointer-events-none"
            } hover:bg-gray-50 ${index === 0 && "mt-2"} py-[2.26rem]`}
            key={index}
          >
            <img
              alt=""
              src={element.imgurl}
              className="h-[3.5rem] w-[3.5rem] rounded-full"
            />
            <div className="w-full px-3">
              <p className="font-normal text-slate-800 tracking-tight">
                {element.name}
              </p>
              <div className="text-sm text-slate-500 flex">
                <p className="text-ellipsis truncate">{element.mesg[0]}</p>
                <p>&nbsp;&#x22C5;&nbsp;3d</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePreview;
