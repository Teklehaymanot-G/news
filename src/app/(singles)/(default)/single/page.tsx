import React, { useEffect, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import SingleHeader from "app/(singles)/SingleHeader";
import Layout from "../layout";
import { useParams } from "react-router-dom";
import { createContext } from "vm";
import { PostContext } from "context/postContext";

const PageSingle = () => {
  const params = useParams();

  const [postData, setPostData] = useState({
    id: "",
    category: "",
    postContent: "",
    postExcerpt: "",
    tags: "",
    title: "",
    featuredImage: "",
  });
  useEffect(() => {
    let postParsed = JSON?.parse(localStorage.getItem("posts") || "[]");
    let categoryParsed = JSON?.parse(
      localStorage.getItem("categories") || "[]"
    );
    let findByID = postParsed?.find(
      (item: { id: string | undefined }) => item?.id == params["*"]
    );
    setPostData({
      ...findByID,
      category: categoryParsed?.find(
        (item: { id: any }) => item?.id == findByID?.category
      )?.name,
    });
  }, []);

  return (
    <PostContext.Provider value={postData}>
      <Layout>
        <div className={`nc-PageSingle pt-8 lg:pt-16`}>
          <header className="container rounded-xl">
            <div className="max-w-screen-md mx-auto">
              <SingleHeader />
            </div>
          </header>

          {/* FEATURED IMAGE */}
          <NcImage
            alt="single"
            containerClassName="container my-10 sm:my-12"
            className="w-full rounded-xl"
            // src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
            src={postData?.featuredImage}
            width={1260}
            height={750}
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        </div>
      </Layout>
    </PostContext.Provider>
  );
};

export default PageSingle;
