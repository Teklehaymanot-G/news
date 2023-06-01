import SectionLargeSlider from "app/(home)/SectionLargeSlider";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionHero3 from "components/Sections/SectionHero3";
import SectionMagazine1 from "components/Sections/SectionMagazine1";
import SectionSliderPosts from "components/Sections/SectionSliderPosts";
import { DEMO_AUTHORS } from "data/authors";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";

//
const MAGAZINE1_POSTS = DEMO_POSTS;
// const MAGAZINE1_POSTS = DEMO_POSTS.filter((_: any, i: any) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_: any, i: any) => i >= 0 && i < 7);
//

const PageHome = () => {
  // console.log(MAGAZINE1_POSTS);

  return (
    <div className="nc-PageHome relative">
      <div className="container relative">
        {/* <SectionHero3 className="pb-16 lg:pb-28" posts={MAGAZINE1_POSTS} /> */}
        <SectionLargeSlider
          className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
          posts={DEMO_POSTS?.filter((_: any, i: any) => i < 3)}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="ጸሐፊዎች"
            subHeading="ጸሐፊዎችን ሰላም ይበሉ"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />
        </div>

        <SectionSliderNewCategories
          className="py-16 lg:py-28"
          heading="ከፍተኛ በመታየት ላይ ያሉ ርዕሶች"
          subHeading="Discover 233 topics"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          categoryCardType="card4"
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card9"
            heading="የቅርብ ጊዜ የድምጽ መጣጥፎችን ያስሱ"
            subHeading="በሙዚቃው ወይም በፖድካስት ለመደሰት አዶውን ጠቅ ያድርጉ 🎧"
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
          />
        </div>

        <SectionMagazine1 className="py-16 lg:py-28" posts={MAGAZINE1_POSTS} />
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageHome;
