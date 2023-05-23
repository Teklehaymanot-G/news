import PageArchiveAudio from "app/(archives)/archive-2/page";
import PageArchiveVideo from "app/(archives)/archive-3/page";
import PageArchive from "app/(archives)/archive/page";
import PageFavorites from "app/(archives)/favorites/favorites";
import PageHome from "app/(home)/page";
import PageChangePassword from "app/(others)/changePassowrd/page";
import PageContact from "app/(others)/contact/page";
import DashboardAuthors from "app/(others)/dashboard/authors/page";
import DashboardBilingAddress from "app/(others)/dashboard/billing-address/page";
import DashboardCategories from "app/(others)/dashboard/categories/category";
import DashboardEditProfile from "app/(others)/dashboard/edit-profile/page";
import DashboardPosts from "app/(others)/dashboard/posts/page";
import DashboardSubmitCategory from "app/(others)/dashboard/submit-category/page";
import DashboardSubmitPost from "app/(others)/dashboard/submit-post/page";
import DashboardSubcription from "app/(others)/dashboard/subscription/page";
import PageForgotPass from "app/(others)/forgot-pass/page";
import PageLogin from "app/(others)/login/page";
import PageSignUp from "app/(others)/signup/page";
import PageSubcription from "app/(others)/subscription/page";
import PageSearchV2 from "app/(search)/search-2/page";
import PageSearch from "app/(search)/search/page";
import PageSingle from "app/(singles)/(default)/single/page";
import SiteHeader from "app/SiteHeader";
import PageAbout from "app/about/page";
import PageAuthor from "app/author/page";
import Page404 from "app/not-found";
import Loading from "components/Button/Loading";
import Footer from "components/Footer/Footer";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";
import { ProtectedRoute } from "helper/protectedRoute";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Page } from "./types";

export const pages: Page[] = [
  { path: "/", component: PageHome },

  { path: "/favorites", component: PageFavorites },
  { path: "/author/:id", component: PageAuthor },
  { path: "/archive/:id", component: PageArchive },
  { path: "/news/*", component: PageSingle },

  // archives page -------------------------------------------------------
  { path: "/archive-2/*", component: PageArchiveAudio },
  { path: "/archive-3/*", component: PageArchiveVideo },

  // single page -------------------------------------------------------
  // { path: "/single-2/*", component: PageSingleTemplate2 },
  // { path: "/single-audio/*", component: PageSingleAudio },
  // { path: "/single-video/*", component: PageSingleVideo },
  // { path: "/single-gallery/*", component: PageSingleGallery },
  // { path: "/single-3/*", component: PageSingleTemplate3 },
  // { path: "/single-4/*", component: PageSingleTemplate4 },
  // { path: "/single-5/*", component: PageSingleTemplate2 },

  // search -------------------------------------------------------
  { path: "/search", component: PageSearch },
  { path: "/search-2", component: PageSearchV2 },

  // other pages -------------------------------------------------------
  { path: "/about", component: PageAbout },
  { path: "/contact", component: PageContact },
  { path: "/page404", component: Page404 },
  // { path: "/login", component: PageLogin },
  { path: "/change-password", component: PageChangePassword },
  { path: "/signup", component: PageSignUp },
  { path: "/forgot-pass", component: PageForgotPass },
  { path: "/subscription", component: PageSubcription },
  { path: "/dashboard", component: DashboardSubmitPost },
  { path: "/dashboard/authors", component: DashboardAuthors },
  { path: "/dashboard/posts", component: DashboardPosts },
  { path: "/dashboard/categories", component: DashboardCategories },
  { path: "/dashboard/edit-profile", component: DashboardEditProfile },
  { path: "/dashboard/subscription", component: DashboardSubcription },
  { path: "/dashboard/billing-address", component: DashboardBilingAddress },
  { path: "/dashboard/submit-post", component: DashboardSubmitPost },
  { path: "/dashboard/submit-category", component: DashboardSubmitCategory },
];

const MyRoutes = () => {
  const [author, setAuthor] = useState();
  const [autourCheckLoading, setAutourCheckLoading] = useState(true);

  useEffect(() => {
    let checkToken = async () => {
      let authorsParsed = await JSON.parse(
        localStorage.getItem("author-session") || "{}"
      );
      // console.log(authorsParsed);
      setAuthor(authorsParsed);
    };
    checkToken();

    // let autourParsed = JSON.parse(
    //   localStorage.getItem("author-session") || "{}"
    // );
    // console.log(authorsParsed);
    // setAuthor(authorsParsed);

    setAutourCheckLoading(false);
  }, []);

  if (autourCheckLoading || author == undefined) return <Loading />;

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" />

      <SiteHeader />

      <Routes>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/dashboard/authors" element={<DashboardAuthors />} />

        <Route element={<ProtectedRoute author={author} />}>
          {pages.map(({ component: Component, path }, index) => {
            return <Route key={index} element={<Component />} path={path} />;
          })}
        </Route>
        <Route element={<Page404 />} />
      </Routes>

      <Footer />
      <MusicPlayer />
    </BrowserRouter>
  );
};

export default MyRoutes;
