interface Props {
  profile: { username: string; imgurl: string; desc: string }[];
}

const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <div className="w-full h-[28rem] md:flex hidden flex-col pl-8 text-gray-700 top-[5.36rem] sticky">
      <div className="h-20 w-full flex justify-between items-center">
        <span className="flex items-center cursor-pointer">
          <img
            src="https://i.pinimg.com/736x/f0/6b/ea/f06bea95d2c425676a1a531f0c7159fe.jpg"
            alt=""
            className="h-14 w-14 rounded-full"
          />
          <p className="text-sm font-semibold px-[1.15rem]">
            rohan_shrestha.js
          </p>
        </span>
        <p className="text-xs font-bold text-blue-400 cursor-pointer">Switch</p>
      </div>

      <div className="w-full h-[16.5rem] flex flex-col justify-between pt-[1px]">
        <span className="flex justify-between items-center">
          <p className="text-sm font-semibold text-gray-500">
            Suggestions For You
          </p>
          <p className="text-xs font-semibold cursor-pointer">See All</p>
        </span>

        {profile.map((element: any, index: number) => (
          <div
            className="w-full flex justify-between items-center pl-1"
            key={index}
          >
            <span className="flex items-center cursor-pointer">
              <img
                src={element.imgurl}
                alt=""
                className="h-8 w-8 rounded-full"
              />
              <span className="flex flex-col px-3">
                <p className="text-sm font-semibold">{element.username}</p>
                <p className="text-xs font-semibold text-gray-400 truncate">
                  {element.desc}
                </p>
              </span>
            </span>
            <p className="text-xs font-bold text-blue-400 cursor-pointer">
              Follow
            </p>
          </div>
        ))}
      </div>

      <div className="h-[6.3rem] flex flex-col justify-between pt-8">
        <div className="flex flex-col text-xs text-gray-300 font-semibold">
          <div className="flex">
            {[
              "About",
              "Help",
              "Press",
              "API",
              "Jobs",
              "Privacy",
              "Terms",
              "Locations",
            ].map((el) => (
              <span key={el}>
                {el}
                <span className="px-1">&#8901;</span>
              </span>
            ))}
          </div>
          <p>Language</p>
        </div>

        <p className="text-xs text-gray-300 font-semibold">
          © 2022 INSTAGRAM FROM META
        </p>
      </div>
    </div>
  );
};

export default Profile;
