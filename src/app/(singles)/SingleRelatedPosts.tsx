import React, { FC, useContext } from "react";
import Heading from "components/Heading/Heading";
import { PostDataType } from "data/types";
import Card11 from "components/Card11/Card11";
import Card9 from "components/Card9/Card9";
import { DEMO_POSTS } from "data/posts";
import { Route } from "routers/types";
import { PostContext } from "context/postContext";

export interface SingleRelatedPostsProps {
  relatedPosts?: PostDataType[];
  moreFromAuthorPosts?: PostDataType[];
}

// DEMO DATA
let demoRelated: PostDataType[] = DEMO_POSTS.filter(
  (_: any, i: any) => i >= 10 && i < 14
);
// make different href demo, for user can click
// demoRelated = demoRelated.map((item, index) => ({
//   ...item,
//   href: (item.href + index) as Route,
// }));

let demoMoreFromAuthor: PostDataType[] = DEMO_POSTS.filter(
  (_: any, i: any) => i >= 14 && i < 18
);
// make different href demo, for user can click
demoMoreFromAuthor = demoMoreFromAuthor.map((item, index) => ({
  ...item,
  href: (item.href + index + "-") as Route,
}));

const SingleRelatedPosts: any = () => {
  const postData = useContext(PostContext);
  const posts = JSON.parse(localStorage?.getItem("posts") || "[]");
  const relatedPosts = posts
    ?.filter((item: any) => item?.categoriesId == postData?.categoriesId)
    ?.map((item: any) => ({
      ...item,
      author: postData?.author,
    }));
  const moreFromAuthorPosts = posts
    ?.filter((item: any) => item?.authorId == postData?.authorId)
    ?.map((item: any) => ({
      ...item,
      author: postData?.author,
    }));

  return (
    <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-28">
      {/* RELATED  */}
      <div className="container">
        <div>
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            Related posts
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {relatedPosts.map((post: any) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* MORE FROM AUTHOR */}
        <div className="mt-20">
          <Heading
            className="mb-10 text-neutral-900 dark:text-neutral-50"
            desc=""
          >
            More from author
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {moreFromAuthorPosts.map((post: any) => (
              <Card9 key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRelatedPosts;
