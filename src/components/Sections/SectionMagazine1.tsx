import React, { FC, useState } from "react";
import Card2 from "components/Card2/Card2";
import { PostDataType } from "data/types";
import Card6 from "components/Card6/Card6";
import HeaderFilter from "./HeaderFilter";

export interface SectionMagazine1Props {
  posts: PostDataType[];
  heading?: string;
  className?: string;
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  posts,
  heading = "የቅርብ ጊዜ መጣጥፎች 🎈 ",
  className = "",
}) => {
  const [tabActiveMy, setTabActiveMy] = useState<string>();

  return (
    <div className={`nc-SectionMagazine1 ${className}`}>
      <HeaderFilter
        heading={heading}
        tabActiveMy={tabActiveMy}
        setTabActiveMy={setTabActiveMy}
      />
      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {posts?.filter((item: any) =>
          tabActiveMy ? item?.categoriesId == tabActiveMy : true
        )[0] && (
          <Card2
            size="large"
            post={
              posts?.filter((item: any) =>
                tabActiveMy ? item?.categoriesId == tabActiveMy : true
              )[0]
            }
          />
        )}
        <div className="grid gap-6 md:gap-8">
          {posts
            .filter((item: any) =>
              tabActiveMy ? item?.categoriesId == tabActiveMy : true
            )
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <div className="max-h-44">
                <Card6 key={index} post={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine1;
