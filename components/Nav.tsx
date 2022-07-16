import { useState } from "react";
import { search } from "../public/images/logos";
import NavIcons from "./NavIcons";

const Nav: React.FC = () => {
  const [hideBtn, setHideBtn] = useState<string>("block");

  return (
    <div className="w-full h-[60px] sticky top-0 border border-b border-gray-300 flex items-center justify-center px-4 bg-[#FAFAFA]">
      <div className="md:w-[58.5rem] w-full h-11 flex justify-between items-center">
        <img
          src={"/images/instagram-new-logo.png"}
          alt=""
          className="h-[38px] w-auto pr-3 pt-2"
        />
        <div className="sm:w-[37.7rem] w-full h-full flex items-center sm:justify-between justify-end">
          <div className="md:w-[16.8rem] sm:flex items-center hidden">
            <span className={`${hideBtn} absolute px-4`}>{search}</span>
            <input
              type="search"
              placeholder="Search"
              className={`w-full h-9 rounded-md border-0 bg-[rgba(225,225,225,0.5)] ${
                hideBtn === "block" ? "px-11" : "px-4"
              } font-thin focus:border-0 focus:outline-none`}
              onFocus={() => setHideBtn("hidden")}
              onBlur={() => setHideBtn("block")}
            />
          </div>

          <div className="sm:w-[16rem] w-full flex items-center sm:justify-between justify-evenly">
            <NavIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
