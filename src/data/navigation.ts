import { NavItemType } from "components/Navigation/NavigationItem";
import { Route } from "routers/types";
import _ from "lodash";

const randomId = _.uniqueId;

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: randomId(),
    href: "/",
    name: "Home",
  },

  // single pages ----------------
  // {
  //   id: randomId(),
  //   href: "/news/demo-slug" as Route,
  //   name: "Singles",
  //   type: "dropdown",
  //   children: [
  //     {
  //       id: randomId(),
  //       href: "/news/demo-slug" as Route,
  //       name: "Single page 1",
  //     },
  //     {
  //       id: randomId(),
  //       href: "/single-2/demo-slug" as Route,
  //       name: "Single page 2",
  //     },
  //     {
  //       id: randomId(),
  //       href: "/single-3/demo-slug" as Route,
  //       name: "Single page 3",
  //     },
  //     {
  //       id: randomId(),
  //       href: "/single-4/demo-slug" as Route,
  //       name: "Single page 4",
  //     },

  //     {
  //       id: randomId(),
  //       href: "/single-audio/demo-slug" as Route,
  //       name: "Single Audio",
  //     },
  //     {
  //       id: randomId(),
  //       href: "/single-video/demo-slug" as Route,
  //       name: "Single Video",
  //     },
  //     {
  //       id: randomId(),
  //       href: "/single-gallery/demo-slug" as Route,
  //       name: "Single Gallery",
  //       isNew: true,
  //     },
  //   ],
  // },

  //
  {
    id: randomId(),
    href: "/favorites" as Route,
    name: "Favorites",
  },
  {
    id: randomId(),
    href: "/archive/demo-slug" as Route,
    name: "Beauty",
  },

  {
    id: randomId(),
    href: "/archive/demo-slug" as Route,
    name: "Sport",
  },
];
