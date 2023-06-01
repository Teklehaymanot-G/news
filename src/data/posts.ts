import __posts from "./jsons/__posts.json";
import __posts_news from "./jsons/__posts_news.json";
import __postsGallery from "./jsons/__postsGallery.json";
import __postsVideo from "./jsons/__postsVideo.json";
import __postsAudio from "./jsons/__postsAudio.json";
import { DEMO_CATEGORIES } from "./taxonomies";
import { PostDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";

// FOR MAIN DEMO
const DEMO_POSTS = JSON?.parse(localStorage.getItem("posts") || "[]").map(
  (post: any, index: any): PostDataType => {
    //  ##########  GET CATEGORY BY CAT ID ######## //
    // const categories = post.categoriesId.map(
    //   (id: any) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
    // );
    let categoriesParsed = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    const categories = [
      categoriesParsed?.find((item: any) => item?.id == post.categoriesId),
    ];

    let authorParsed = JSON.parse(localStorage.getItem("authors") || "[]");
    // const categories = [
    //   authorParsed?.find((item: any) => item?.id == post.categoriesId),
    // ];

    return {
      ...post,
      // id: `DEMO_POSTS_${index + 1}`,
      author: authorParsed?.find((item: any) => item?.id == post.authorId),
      href: "/news/" + post?.id,
      // author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      categories: [categories[0]],
    } as PostDataType;
  }
);

// FOR MAIN DEMO
const DEMO_POSTS_NEWS = __posts_news.map((post, index): PostDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categories = post.categoriesId.map(
    (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...post,
    id: `DEMO_POSTS_NEWS_${index + 1}`,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

// FOR POST TYPE GALLERY
const DEMO_POSTS_GALLERY = __postsGallery.map((post, index): PostDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categories = post.categoriesId.map(
    (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...post,
    id: `DEMO_POSTS_GALLERY_${index + 1}`,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

// FOR POST TYPE VIDEO
const DEMO_POSTS_VIDEO = __postsVideo.map((post, index): PostDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categories = post.categoriesId.map(
    (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...post,
    id: `DEMO_POSTS_VIDEO_${index + 1}`,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

// FOR POST TYPE AUDIO
const DEMO_POSTS_AUDIO = __postsAudio.map((post, index): PostDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const categories = post.categoriesId.map(
    (id) => DEMO_CATEGORIES.filter((taxonomy) => taxonomy.id === id)[0]
  );

  return {
    ...post,
    id: `DEMO_POSTS_AUDIO_${index + 1}`,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    categories: [categories[0]],
  } as PostDataType;
});

export {
  DEMO_POSTS,
  DEMO_POSTS_AUDIO,
  DEMO_POSTS_GALLERY,
  DEMO_POSTS_VIDEO,
  DEMO_POSTS_NEWS,
};
