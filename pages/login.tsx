import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

const Login = () => {
  const [loginBg, setLoginBg] = useState<string>("bg-[#B2DFFC]");

  const buttonElement = useRef() as any;
  const slideShow1 = useRef() as any;
  const slideShow2 = useRef() as any;
  const slideShow3 = useRef() as any;
  const slideShow4 = useRef() as any;

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e: React.SyntheticEvent): void => {
    const { name, value } = e.target as HTMLButtonElement;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  useEffect((): void => {
    if (!email) return;
    if (password.length >= 6) {
      setLoginBg("bg-[#0095F6]");
      buttonElement.current.disabled = false;
    } else {
      setLoginBg("bg-[#B2DFFC]");
      buttonElement.current.disabled = true;
    }
    // eslint-disable-next-line
  }, [onChange]);

  let i: number = 1;

  setInterval((): void => {
    const slideShow: any[] = [slideShow1, slideShow2, slideShow3, slideShow4];
    slideShow.forEach(
      (element) => element.current && (element.current.style.opacity = 0)
    );
    slideShow[i].current && (slideShow[i].current.style.opacity = 1);
    i === 3 ? (i = 0) : (i += 1);
  }, 4000);

  return (
    <div className="w-screen font-sans flex justify-center">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-[68rem] min-h-screen flex items-center justify-center">
        <div className="w-1/2 h-[46.6rem] hidden lg:flex items-center justify-end">
          <div className="flex justify-end">
            <img src={"/images/phones.png"} alt="" />
            <div className="absolute w-[19.4rem] h-[35.5rem] flex items-end transition-all duration-300">
              <img
                src={"/images/ss1.png"}
                alt=""
                ref={slideShow1}
                className="transition-all duration-1000 absolute opacity-1"
              />
              <img
                src={"/images/ss2.png"}
                alt=""
                ref={slideShow2}
                className="transition-all duration-1000 absolute opacity-0"
              />
              <img
                src={"/images/ss3.png"}
                alt=""
                ref={slideShow3}
                className="transition-all duration-1000 absolute opacity-0"
              />
              <img
                src={"/images/ss4.png"}
                alt=""
                ref={slideShow4}
                className="transition-all duration-1000 absolute opacity-0"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[46.6rem] flex items-center justify-center lg:justify-start">
          <div className="w-[25rem] h-[38rem] flex flex-col items-center justify-between">
            <div className="w-full h-[72%] flex flex-col items-center justify-evenly border-2">
              <img src={"/images/instalogo.png"} alt="" className="p-5" />
              <div className="w-4/5 flex flex-col items-center justify-between h-[5.4rem] text-sm">
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Phone number, username, or email"
                  className="w-full p-2 border-2 rounded-sm focus:border-2 focus:outline"
                  onChange={onChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  className="w-full p-2 border-2 rounded-sm focus:border-2 focus:outline"
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                ref={buttonElement}
                value="Log In"
                className={`w-4/5 py-[0.3rem] text-white rounded-sm font-bold cursor-pointer ${loginBg}`}
                disabled
              />
              <div className="w-4/5 font-semibold text-gray-400 flex items-center justify-between px-[2px]">
                <p className="w-5/12 h-[1px] bg-gray-400"></p>
                <p>OR</p>
                <p className="w-5/12 h-[1px] bg-gray-400"></p>
              </div>
              <Link href="/">
                <div className="flex text-blue-900 font-semibold items-center cursor-pointer">
                  <img
                    src={"/images/facebook.png"}
                    alt=""
                    className="w-5 h-5 mr-2"
                  />
                  Log in with Facebook
                </div>
              </Link>
              <p className="text-sm cursor-pointer">Forgot password?</p>
            </div>
            <div className="w-full border-2 rounded-sm flex items-center justify-center py-4">
              Don't have an account?
              <Link href="signup">
                <span className="pl-1 text-blue-500 font-semibold cursor-pointer">
                  Sign up
                </span>
              </Link>
            </div>
            <p>Get the app.</p>
            <div className="flex w-4/5 justify-evenly">
              <img
                alt=""
                src={"/images/applestore.png"}
                className="w-36 cursor-pointer"
              />
              <img
                alt=""
                src={"/images/googleplay.png"}
                className="w-36 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
