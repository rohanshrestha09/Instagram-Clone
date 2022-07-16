import { bigDirect } from "../public/images/logos";

const NewMessage: React.FC = () => {
  return (
    <div className="w-full h-56 flex flex-col items-center justify-between">
      <div>{bigDirect}</div>
      <p className="text-xl font-thin">Your Messages</p>
      <p className="text-slate-500 text-sm">
        Send private photos and messages to a friend or group.
      </p>
      <input
        type="button"
        value="Send Message"
        className="bg-blue-500 py-[0.3rem] px-[0.6rem] my-3 rounded-md text-sm text-white font-medium cursor-pointer"
      />
    </div>
  );
};

export default NewMessage;
