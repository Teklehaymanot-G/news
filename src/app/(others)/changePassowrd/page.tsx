import ButtonPrimary from "components/Button/ButtonPrimary";
import Heading2 from "components/Heading/Heading2";
import Input from "components/Input/Input";
import { LoggedInContext } from "context/loggedInContext";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../layout";

const PageChangePassword = () => {
  let author = useContext(LoggedInContext);

  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [logged, setLogged] = useState(false);

  // useEffect(() => {
  //   logged && navigate("/");
  //   console.log(logged);
  // }, [logged]);
  return (
    <Layout>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20 ">
        <Heading2>Change Password</Heading2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
          Welcome to our blog magazine Community
        </span>
      </header>

      <div className="max-w-md mx-auto space-y-6">
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200">
              New Password
            </span>
            <Input
              type="password"
              className="mt-1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
              Confirm Password
            </span>
            <Input
              type="password"
              className="mt-1"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </label>
          <ButtonPrimary
            type="button"
            onClick={async () => {
              if (newPassword !== confirm) {
                navigate("/");

                toast.error("Passwords not match");
                return;
              }

              let authorsParsed = JSON.parse(
                localStorage.getItem("authors") || "[]"
              );

              let loggedIn = JSON.parse(
                localStorage.getItem("author-session") || "{}"
              );

              loggedIn.author = {
                ...loggedIn?.author,
                firstTime: false,
                password: newPassword,
              };

              localStorage.setItem(
                "authors",
                JSON.stringify([
                  ...authorsParsed?.filter(
                    (item: any) => item?.email !== loggedIn?.author?.email
                  ),
                  loggedIn?.author,
                ])
              );

              await localStorage.setItem(
                "author-session",
                JSON.stringify({
                  author: loggedIn.author,
                  token: loggedIn.token,
                })
              );

              // setLogged(true);
              // <Navigate to="/" />;
              navigate("/");
              toast.success("Successfully Changed");
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

export default PageChangePassword;
