import React, { useEffect, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const people = [
  {
    id: 1,
    title: "Politics",
    liveStatus: true,
  },
  {
    id: 2,
    title: "Sport",
    liveStatus: true,
  },
  {
    id: 3,
    title: "Art and Design",
    liveStatus: true,
  },
  {
    id: 4,
    title: "Education",
    liveStatus: true,
  },
  {
    id: 5,
    title: "Health",
    liveStatus: false,
  },
  {
    id: 6,
    title: "Business",
    liveStatus: true,
  },
];

const DashboardCategories = () => {
  const [category, setCategory] = useState([{ id: -1, name: "", status: "" }]);

  useEffect(() => {
    let categoryParsed = JSON?.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategory(categoryParsed);
  }, []);

  return (
    <Layout>
      <LayoutDashboard>
        <div className="flex flex-col space-y-8">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8">
              <div className="shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                  <thead className="bg-neutral-50 dark:bg-neutral-800">
                    <tr className="text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                      <th scope="col" className="px-6 py-3">
                        Article
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
                    {category?.map((item) => (
                      <tr key={item?.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.status === "Active" ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm">
                              Active
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full">
                              Offline
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300">
                          <a
                            href="/#"
                            className="text-primary-800 dark:text-primary-500 hover:text-primary-900"
                          >
                            Edit
                          </a>
                          {` | `}
                          <a
                            href="#"
                            className="text-rose-600 hover:text-rose-900"
                            onClick={() => {
                              localStorage.setItem(
                                "categories",
                                JSON.stringify(
                                  category?.filter(
                                    (obj) => obj?.id !== item?.id
                                  )
                                )
                              );
                              setCategory(
                                category?.filter((obj) => obj?.id !== item?.id)
                              );
                            }}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardCategories;
