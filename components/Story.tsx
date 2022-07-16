interface Props {
  stories: { username: string; imgurl: string }[];
}

const Story: React.FC<Props> = ({ stories }) => {
  return (
    <div className="w-full h-[7.4rem] flex justify-between p-[15px] pt-[18px] border border-gray-300 rounded-lg text-gray-600">
      {stories.map((element: any, index: number) => (
        <div
          className="md:w-[16%] w-[20%] flex flex-col justify-between items-center cursor-pointer"
          key={index}
        >
          <img
            src={element.imgurl}
            alt=""
            className="md:h-16 md:w-16 w-14 h-14 rounded-full p-[1px] border-2 border-[#FF1A53]"
          />
          <p className="w-full text-center text-xs truncate">
            {element.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Story;
