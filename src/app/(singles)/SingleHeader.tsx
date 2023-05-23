import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostMeta2 from "components/PostMeta2/PostMeta2";
import { PostContext } from "context/postContext";
import { FC, useContext } from "react";
import SingleMetaAction2 from "./SingleMetaAction2";
import SingleTitle from "./SingleTitle";

export interface SingleHeaderProps {
  hiddenDesc?: boolean;
  titleMainClass?: string;
  className?: string;
  paramsData?: any;
}

const SingleHeader: FC<SingleHeaderProps> = ({
  titleMainClass,
  hiddenDesc = false,
  className = "",
}) => {
  const postData = useContext(PostContext);

  // console.log(postData?.category);
  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <CategoryBadgeList
            itemClass="!px-3"
            categories={[postData?.category]}
          />
          <SingleTitle mainClass={titleMainClass} title={postData?.title} />
          {!hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {postData?.postExcerpt || ""}
            </span>
          )}
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
            <PostMeta2
              size="large"
              className="leading-none flex-shrink-0"
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
            />
            <SingleMetaAction2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
