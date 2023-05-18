import React, { useEffect, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";
import Layout from "../../layout";
import LayoutDashboard from "../layout";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Label from "components/Label/Label";
import Input from "components/Input/Input";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Textarea from "components/Textarea/Textarea";

const DashboardAuthors = () => {
  console.log("asd");

  const [addAuthor, setAddAuthor] = useState(false);
  const [profile, setProfile] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDecription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [authorsList, setAuthorsList] = useState([
    { id: -1, fullName: "", status: "", email: "", profile: "", password: "" },
  ]);

  useEffect(() => {
    let authorsParsed = JSON?.parse(localStorage.getItem("authors") || "[]");
    setAuthorsList(authorsParsed);
  }, []);

  function encodeImageFileAsURL(element: any) {
    console.log(element.target.files);
    var file = element?.target?.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setProfile(reader?.result?.toString() || "");
      // console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <LayoutDashboard>
        <div className="flex flex-col space-y-8">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8">
              <div className="pb-2">
                <div className="flex flex-row justify-end pb-2">
                  <button
                    className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
                    onClick={() => setAddAuthor(!addAuthor)}
                  >
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {addAuthor && (
                  <form
                    className="grid md:grid-cols-2 gap-6"
                    onSubmit={() => {
                      let newData = [
                        ...authorsList,
                        {
                          id: Math?.random(),
                          fullName,
                          email,
                          description,
                          password,
                          profile,
                          status: "Active",
                          firstTime: true,
                        },
                      ];
                      localStorage.setItem("authors", JSON.stringify(newData));
                      setAuthorsList(newData);
                    }}
                  >
                    <label className="block">
                      <Label>Full name</Label>
                      <Input
                        placeholder="Example Doe"
                        type="text"
                        className="mt-1"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <Label> Email address</Label>
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        className="mt-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label className="block md:col-span-2">
                      <Label>Description</Label>

                      <Textarea
                        className="mt-1"
                        rows={4}
                        value={description}
                        onChange={(e) => setDecription(e.target.value)}
                      />
                      <p className="mt-1 text-sm text-neutral-500">
                        Brief description about the author.
                      </p>
                    </label>
                    <label className="block">
                      <Label>Password</Label>
                      <Input
                        placeholder="***"
                        type="password"
                        className="mt-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <Label>Confirm password</Label>
                      <Input
                        type="password"
                        className="mt-1"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </label>
                    <label className="block md:col-span-2">
                      <Label>Profile</Label>

                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-neutral-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div className="flex flex-col sm:flex-row text-sm text-neutral-6000">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={(e) => encodeImageFileAsURL(e)}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-neutral-500">
                            PNG, JPG, GIF up to 2MB
                          </p>
                        </div>
                      </div>
                    </label>
                    <ButtonPrimary className="md:col-span-2" type="submit">
                      Submit author
                    </ButtonPrimary>
                  </form>
                )}
              </div>
              <div className="shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                  <thead className="bg-neutral-50 dark:bg-neutral-800">
                    <tr className="text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                      <th scope="col" className="px-6 py-3">
                        Full Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
                    {authorsList?.map((item) => (
                      <tr key={item?.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center w-76 lg:w-auto max-w-md overflow-hidden">
                            <NcImage
                              containerClassName="flex-shrink-0 h-12 w-12 rounded-lg relative z-0 overflow-hidden lg:h-14 lg:w-14"
                              src={item?.profile}
                              fill
                              sizes="80px"
                              alt="post"
                            />
                            <div className="ml-4 flex-grow">
                              <h2 className="inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300">
                                {item?.fullName}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.email}
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
                                  authorsList?.filter(
                                    (obj) => obj?.id !== item?.id
                                  )
                                )
                              );
                              setAuthorsList(
                                authorsList?.filter(
                                  (obj) => obj?.id !== item?.id
                                )
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

export default DashboardAuthors;
