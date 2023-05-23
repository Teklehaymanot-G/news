import { Route } from "routers/types";
import { PostAuthorType } from "./types";

const DEMO_AUTHORS: PostAuthorType[] = JSON?.parse(
  localStorage.getItem("authors") || "[]"
).map((item: any, index: any) => ({
  ...item,
  href: item.href as Route,
}));

export { DEMO_AUTHORS };
