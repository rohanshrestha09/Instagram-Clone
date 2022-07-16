import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const Signup = () => {
  const [loginBg, setLoginBg] = useState<string>("bg-[#B2DFFC]");

  const buttonElement = useRef() as any;

  const [signupData, setSignupData] = useState<{
    email: string;
    fullname: string;
    username: string;
    password: string;
  }>({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const { email, fullname, username, password } = signupData;

  const onChange = (e: React.SyntheticEvent): void => {
    const { name, value } = e.target as HTMLButtonElement;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  useEffect((): void => {
    if (!email && !fullname && !username) return;
    if (password.length >= 6) {
      setLoginBg("bg-[#0095F6]");
      buttonElement.current.disabled = false;
    } else {
      setLoginBg("bg-[#B2DFFC]");
      buttonElement.current.disabled = true;
    }
    // eslint-disable-next-line
  }, [onChange]);

  return (
    <div className="w-screen font-sans min-h-[46.6rem] flex items-end justify-center">
      <Head>
        <title>Login &#8901; Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[44rem] w-96 flex flex-col items-center justify-between">
        <div className="h-[90%] w-full flex flex-col justify-evenly items-center border-2 py-5 rounded-sm">
          <img src={"/images/instalogo.png"} alt="" />
          <p className="w-3/5 text-center font-semibold text-lg text-gray-400">
            Sign up to see photos and videos from your friends
          </p>
          <Link href="/">
            <div className="w-4/5 py-[0.3rem] flex items-center justify-center text-white rounded-sm font-bold text-center cursor-pointer bg-[#0095F6]">
              <img
                src={"/images/facebookWhite.png"}
                alt=""
                className="bg-white w-5 h-5 mr-2"
              />
              Log in with Facebook
            </div>
          </Link>
          <div className="w-4/5 font-semibold text-gray-400 flex items-center justify-between px-[2px]">
            <p className="w-5/12 h-[1px] bg-gray-400"></p>
            <p>OR</p>
            <p className="w-5/12 h-[1px] bg-gray-400"></p>
          </div>
          <div className="w-4/5 flex flex-col items-center justify-between h-44 text-sm">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Mobile number or email"
              className="w-full p-2 border-2 rounded-sm focus:border-2 focus:outline"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="fullname"
              value={fullname}
              placeholder="Full Name"
              className="w-full p-2 border-2 rounded-sm focus:border-2 focus:outline"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
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
          <p className="w-4/5 text-xs text-gray-400 text-center">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
          </p>
          <p className="w-4/5 text-xs text-gray-400 text-center">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>
          <input
            type="submit"
            ref={buttonElement}
            value="Sign up"
            className={`w-4/5 py-[0.3rem] text-white rounded-sm font-bold cursor-pointer ${loginBg}`}
            disabled
          />
        </div>
        <div className="w-full border-2 rounded-sm flex items-center justify-center py-4">
          Have an account?
          <Link href="login">
            <span className="pl-1 text-blue-500 font-semibold cursor-pointer">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
