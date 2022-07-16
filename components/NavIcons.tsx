import { useRouter } from "next/router";
import { messenger, heart, create, polygon } from "../public/images/logos";
import { homeDark } from "../public/images/logosDark";
/*import {
  homeDark,
  heartDark,
  messengerDark,
  createDark,
  polygonDark,
} from "../images/logosDark";*/

const NavIcons: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {[homeDark, messenger, create, polygon, heart].map((element, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => {
            element === homeDark && router.push("/");
            element === messenger && router.push("direct");
            element === create && router.push("login");
          }}
        >
          {element}
        </span>
      ))}
      <img
        alt=""
        src="https://i.pinimg.com/736x/f0/6b/ea/f06bea95d2c425676a1a531f0c7159fe.jpg"
        className="w-6 h-6 rounded-full cursor-pointer"
        onClick={() => router.push("login")}
      />
    </>
  );
};

export default NavIcons;
