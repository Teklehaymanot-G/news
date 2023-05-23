import React, { useState } from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Label from "components/Label/Label";
import Layout from "../../layout";
import LayoutDashboard from "../layout";

const DashboardSubmitCategory = () => {
  const [formState, setFormState] = useState({
    id: Math.random(),
    name: "",
    status: "Active",
    thumbnail: "",
  });

  function encodeImageFileAsURL(element: any) {
    var file = element?.target?.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFormState((prev) => ({
        ...prev,
        thumbnail: reader?.result?.toString() || "",
      }));
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={() => {
              let categoryParsed = JSON?.parse(
                localStorage.getItem("categories") || "[]"
              );
              let newData = [...categoryParsed, formState];
              localStorage.setItem("categories", JSON.stringify(newData));
            }}
          >
            <label className="block">
              <Label>Category Name *</Label>

              <Input
                type="text"
                className="mt-1"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>

            <label className="block">
              <Label>Status</Label>

              <Select
                className="mt-1"
                onChange={(e) => {
                  setFormState((prev) => ({ ...prev, status: e.target.value }));
                }}
              >
                <option value="-1">– select –</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
            </label>
            <label className="block md:col-span-2">
              <Label>Background</Label>

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
                      htmlFor="file-upload2"
                      className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload2"
                        name="file-upload2"
                        accept="image/png, image/gif, image/jpeg"
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
              Submit Category
            </ButtonPrimary>
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardSubmitCategory;
