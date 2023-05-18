import PageChangePassword from "app/(others)/changePassowrd/page";
import Loading from "components/Button/Loading";
import { LoggedInContext } from "context/loggedInContext";
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  //   const dispatch = useDispatch();
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    // let checkToken = async () => {
    //   let authorParsed = await JSON.parse(
    //     localStorage.getItem("author-session") || "[]"
    //   );
    //   console.log(authorParsed);
    //   setAuthor(authorParsed);
    // };
    // checkToken();

    let authorParsed = JSON.parse(
      localStorage.getItem("author-session") || "[]"
    );
    console.log(authorParsed);
    setAuthor(authorParsed);
  }, []);

  console.log(author);

  return <Loading />;

  return author?.token ? (
    author?.author?.firstTime ? (
      <LoggedInContext.Provider value={author}>
        <PageChangePassword />
      </LoggedInContext.Provider>
    ) : (
      <LoggedInContext.Provider value={author}>
        <Outlet />
      </LoggedInContext.Provider>
    )
  ) : (
    <Navigate to="/login" />
  );
};
