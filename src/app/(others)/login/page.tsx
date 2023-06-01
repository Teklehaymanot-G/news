import React, { useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import Heading2 from "components/Heading/Heading2";
import Image from "components/Image";
import Layout from "../layout";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Layout>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20 ">
        <Heading2>Login</Heading2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
          Welcome to our blog magazine Community
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              Email address
            </span>
            <Input
              type="email"
              placeholder="example@example.com"
              className="mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Password
              <NcLink href="/forgot-pass" className="text-sm underline">
                Forgot password?
              </NcLink>
            </span>
            <Input
              type="password"
              className="mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <ButtonPrimary
            type="button"
            onClick={async () => {
              let authorsParsed = JSON.parse(
                localStorage.getItem("authors") || "[]"
              );

              let findAuthor = authorsParsed?.find(
                (item: any) =>
                  item?.email === email && item?.password === password
              );

              if (findAuthor) {
                localStorage.setItem(
                  "author-session",
                  JSON.stringify({ author: findAuthor, token: Math.random() })
                );
                // window to="/change-password" />;

                findAuthor?.firstTime
                  ? navigate("/change-password")
                  : navigate("/");
                toast.success("Welcome");
              } else {
                toast.error("Username / Password is not correct");
              }
            }}
          >
            Continue
          </ButtonPrimary>
        </form>

        {/* ==== */}
        {/* <span className="block text-center text-neutral-700 dark:text-neutral-300">
          New user? {` `}
          <NcLink href="/signup">Create an account</NcLink>
        </span> */}
      </div>
    </Layout>
  );
};

export default PageLogin;
