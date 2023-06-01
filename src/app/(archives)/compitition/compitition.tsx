import React, { useState, useEffect, useContext } from "react";
import ModalCategories from "../ModalCategories";
import ModalTags from "../ModalTags";
import { DEMO_POSTS } from "data/posts";
import { PostDataType } from "data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import Pagination from "components/Pagination/Pagination";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "components/Card11/Card11";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Image from "components/Image";
import { LoggedInContext } from "context/loggedInContext";

const PageCompetition = () => {
  const FILTERS = [
    { name: "በጣም ቅርብ ጊዜ" },
    { name: "በእኛ የተመረጡ" },
    { name: "በጣም የተወደዱ" },
    { name: "በብዛት የታዩ" },
  ];

  const [favoritePost, setFavoritePost] = useState<any[]>([]);
  const user = useContext(LoggedInContext);

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    favorites = favorites
      ?.filter((item: any) => item?.userId == user?.author?.id)
      ?.map((item: any) => item?.postId);

    setFavoritePost(
      posts?.filter((item: any) => favorites?.includes(item?.id))
    );
  }, [user]);

  // Tag and category have same data type - we will use one demo data
  const posts: any[] = favoritePost;

  return (
    <div className={`nc-PageArchive`}>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5">
              <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} />
            </div>
            <div className="block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              <ArchiveFilterListBox lists={FILTERS} />
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary>ተጨማሪ አሳየኝ</ButtonPrimary>
          </div>
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="text-center mx-auto mt-10 md:mt-16">
            <ButtonSecondary loading>ተጨማሪ አሳየኝ</ButtonSecondary>
          </div>
        </div>

        {/* === SECTION 5 === */}
        <SectionSliderNewAuthors
          heading="ምርጥ ደራሲዎች"
          subHeading="የኛን ምርጥ ጸሃፊዎችን ያግኙ"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageCompetition;
