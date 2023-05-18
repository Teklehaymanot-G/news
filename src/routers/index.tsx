import PageArchiveAudio from "app/(archives)/archive-2/page";
import PageArchiveVideo from "app/(archives)/archive-3/page";
import PageArchive from "app/(archives)/archive/page";
import PageHome from "app/(home)/page";
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
import PageSingleTemplate2 from "app/(singles)/(default)/single-2/page";
import PageSingleAudio from "app/(singles)/(default)/single-audio/page";
import PageSingleGallery from "app/(singles)/(default)/single-gallery/page";
import PageSingleVideo from "app/(singles)/(default)/single-video/page";
import PageSingle from "app/(singles)/(default)/single/page";
import PageSingleTemplate3 from "app/(singles)/(has-sidebar)/single-3/page";
import PageSingleTemplate4 from "app/(singles)/(has-sidebar)/single-4/page";
import SiteHeader from "app/SiteHeader";
import PageAbout from "app/about/page";
import PageAuthor from "app/author/page";
import Page404 from "app/not-found";
import Footer from "components/Footer/Footer";
import MusicPlayer from "components/MusicPlayer/MusicPlayer";
import { ProtectedRoute } from "helper/protectedRoute";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./types";
import Loading from "components/Button/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageChangePassword from "app/(others)/changePassowrd/page";

export const pages: Page[] = [
  { path: "/", component: PageHome },

  // archives page -------------------------------------------------------
  { path: "/archive/*", component: PageArchive },
  { path: "/archive-2/*", component: PageArchiveAudio },
  { path: "/archive-3/*", component: PageArchiveVideo },
  { path: "/author/*", component: PageAuthor },

  // single page -------------------------------------------------------
  { path: "/single/*", component: PageSingle },
  { path: "/single-2/*", component: PageSingleTemplate2 },
  { path: "/single-audio/*", component: PageSingleAudio },
  { path: "/single-video/*", component: PageSingleVideo },
  { path: "/single-gallery/*", component: PageSingleGallery },
  { path: "/single-3/*", component: PageSingleTemplate3 },
  { path: "/single-4/*", component: PageSingleTemplate4 },
  { path: "/single-5/*", component: PageSingleTemplate2 },

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

  if (autourCheckLoading) return <Loading />;

  console.log(author);

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
