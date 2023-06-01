import React, { FC, useState, useEffect } from "react";
import Heading from "components/Heading/Heading";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import Button from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface HeaderFilterProps {
  tabs?: any[];
  heading: string;
}

const HeaderFilter: FC<any> = ({
  // tabs = ["All items", "Garden", "Fitness", "Design"],
  heading = "🎈 Latest Articles",
  tabActiveMy,
  setTabActiveMy,
}) => {
  const [tabs, setTabs] = useState<any[]>(["All Items"]);
  const [tabActive, setTabActive] = useState<string>(tabs[0]);
  const [allCategory, setAllCategory] = useState<any[]>([]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
    setTabActiveMy(allCategory?.find((ob: any) => item === ob?.name)?.id);
  };

  useEffect(() => {
    let categoriesParsed = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );

    setAllCategory(categoriesParsed);

    setTabs((prev) => [
      "All Items",
      ...categoriesParsed?.map((item: any) => item?.name),
    ]);
  }, []);

  return (
    <div className="flex flex-col mb-8 relative">
      <Heading>{heading}</Heading>
      <div className="flex justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base"
        >
          {tabs.map((item: any, index: any) => (
            <NavItem
              key={index}
              isActive={tabActive === item || tabActiveMy === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        {/* <Button className="!hidden md:!flex" pattern="white" sizeClass="px-6">
          <span>View all</span>
          <ArrowRightIcon className="w-6 h-6 ml-3" />
        </Button> */}
      </div>
    </div>
  );
};

export default HeaderFilter;
