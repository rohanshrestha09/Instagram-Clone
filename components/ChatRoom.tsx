import { Dispatch, SetStateAction, useState } from "react";

import {
  call,
  videocall,
  info,
  heart,
  emoji,
  gallery,
  back,
} from "../public/images/logos";

interface Props {
  message: string[];
  username: { name: string; imgurl: string; mesg: string[] };
}

export const Mesg: React.FC<Props> = ({ message, username }) => {
  return (
    <>
      {message.map((element, index) => (
        <div
          className="w-full flex flex-col md:py-[0.15rem] py-[0.20rem]"
          key={index}
        >
          <div
            className={`items-end ${
              index % 2 === 0 && element.length !== 0 ? "flex" : "hidden"
            }`}
          >
            <img
              alt=""
              src={username.imgurl}
              className="w-6 h-6 rounded-full mr-2"
            />
            <div className="min-h-fit md:max-w-[45%] max-w-[65%] border py-[14px] px-[18px] rounded-3xl text-sm break-words">
              {element}
            </div>
          </div>
          <div
            className={`min-h-fit md:max-w-[45%] max-w-[65%] bg-[#EFEFEF] py-[14px] px-[18px] rounded-3xl text-sm self-end break-words ${
              index % 2 === 1 && element.length !== 0 ? "block" : "hidden"
            }`}
          >
            {element}
          </div>
        </div>
      ))}
    </>
  );
};

interface MainProps {
  ioMessage: string[];
  username: { name: string; imgurl: string; mesg: any[] };
  messageData: { message: string };
  setMessageData: Dispatch<SetStateAction<{ message: string }>>;
  formSubmission: (e: React.SyntheticEvent) => Promise<void>;
  setChatRoomToggle: Dispatch<SetStateAction<boolean>>;
}

const ChatRoom: React.FC<MainProps> = ({
  ioMessage,
  username,
  messageData,
  setMessageData,
  formSubmission,
  setChatRoomToggle,
}) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const { message } = messageData;

  return (
    <>
      <div className="w-full py-4 md:px-7 px-3 flex item-center justify-between font-medium border-0 border-b-2">
        <div className="flex items-center md:px-2 px-0">
          <span
            className="md:hidden block -rotate-90 mr-2"
            onClick={(): void => setChatRoomToggle(false)}
          >
            {back}
          </span>
          <img
            alt=""
            src={username.imgurl}
            className="w-6 h-6 bg-[red] rounded-full"
          />
          <p className="px-3">{username.name}</p>
        </div>
        <div className="w-[6.5rem] flex justify-between items-center">
          {call}
          {videocall}
          {info}
        </div>
      </div>

      <div className="overflow-x-hidden overflow-scroll max-h-[68.1vh] min-h-[68.1vh] w-full flex flex-col-reverse px-4">
        <Mesg message={ioMessage} username={username} />
      </div>

      <div className="w-full h-[5rem] px-[1.20rem] flex items-center">
        <form
          className="w-full flex items-center md:justify-between justify-around border-2 rounded-3xl md:px-5 px-2 py-2"
          onSubmit={formSubmission}
        >
          <div className="cursor-pointer">{emoji}</div>
          <input
            type="search"
            placeholder="Message"
            value={message}
            className="md:w-96 w-48 border-0 focus:border-0 focus:outline-none"
            onFocus={(): void => setInputFocus(true)}
            onBlur={(): void => setInputFocus(false)}
            onChange={(e) => setMessageData({ message: e.target.value })}
          />
          <div className="w-16 flex justify-end items-center">
            <div
              className={`w-full ${
                inputFocus ? "hidden" : "flex"
              } justify-between items-center`}
            >
              {gallery}
              <div className="cursor-pointer">{heart}</div>
            </div>

            <p
              className={`${
                inputFocus ? "block" : "hidden"
              } text-blue-500 text-sm font-medium cursor-pointer`}
              onClick={formSubmission}
            >
              Send
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatRoom;
