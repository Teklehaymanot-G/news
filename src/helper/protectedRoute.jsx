import PageChangePassword from "app/(others)/changePassowrd/page";
import { LoggedInContext } from "context/loggedInContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ author }) => {
  console.log(author?.author?.firstTime);

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
