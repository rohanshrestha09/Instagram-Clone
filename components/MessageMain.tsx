import { Dispatch, SetStateAction } from "react";
import ChatRoom from "./ChatRoom";
import NewMessage from "./NewMessage";

interface Props {
  chatRoomToggle: boolean;
  ioMessage: string[];
  username: { name: string; imgurl: string; mesg: any[] };
  messageData: { message: string };
  setMessageData: Dispatch<SetStateAction<{ message: string }>>;
  formSubmission: (e: React.SyntheticEvent) => Promise<void>;
  setChatRoomToggle: Dispatch<SetStateAction<boolean>>;
}

const MessageMain: React.FC<Props> = ({
  chatRoomToggle,
  ioMessage,
  username,
  messageData,
  setMessageData,
  formSubmission,
  setChatRoomToggle,
}) => {
  return (
    <div
      className={`${
        chatRoomToggle ? "flex" : "hidden"
      } md:flex col-span-full md:col-span-5 w-full h-full flex-col ${
        chatRoomToggle ? "justify-between" : "justify-center"
      }`}
    >
      {chatRoomToggle ? (
        <ChatRoom
          username={username}
          ioMessage={ioMessage}
          messageData={messageData}
          setMessageData={setMessageData}
          formSubmission={formSubmission}
          setChatRoomToggle={setChatRoomToggle}
        />
      ) : (
        <NewMessage />
      )}
    </div>
  );
};

export default MessageMain;
