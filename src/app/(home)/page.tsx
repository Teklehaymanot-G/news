import SectionLargeSlider from "app/(home)/SectionLargeSlider";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
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
        <SectionLargeSlider
          className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
          posts={DEMO_POSTS?.filter((_: any, i: any) => i < 3)}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Authors"
            subHeading="Say hello to future creator potentials"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />
        </div>

        <SectionSliderNewCategories
          className="py-16 lg:py-28"
          heading="Top trending topics"
          subHeading="Discover 233 topics"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          categoryCardType="card4"
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card9"
            heading="Explore latest audio articles"
            subHeading="Click on the icon to enjoy the music or podcast 🎧"
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
          />
        </div>

        <SectionMagazine1 className="py-16 lg:py-28" posts={MAGAZINE1_POSTS} />
      </div>
    </div>
  );
};

export default PageHome;
