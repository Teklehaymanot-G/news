import React from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import Heading2 from "components/Heading/Heading2";
import Layout from "../layout";

const PageForgotPass = () => {
  return (
    <Layout>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
        <Heading2>የይለፍ ቃል ረሱ</Heading2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
          እንኳን ወደ መጽሔታችን በደህና መጡ
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              ስልክ ቁጥር
            </span>
            <Input type="text" placeholder="+2519123456" className="mt-1" />
          </label>
          <ButtonPrimary type="submit">ይቀጥሉ</ButtonPrimary>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Go back for {` `}
          <NcLink href="/login">Sign in</NcLink>
          {` / `}
          <NcLink href="/signup">Sign up</NcLink>
        </span>
      </div>
    </Layout>
  );
};

export default PageForgotPass;
