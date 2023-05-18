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
  });
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
            <label className="block md:col-span-2">
              <Label>Category Name *</Label>

              <Input
                type="text"
                className="mt-1"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </label>

            <label className="block md:col-span-2">
              <Label>Status</Label>

              <Select
                className="mt-1"
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, status: e.target.value }))
                }
              >
                <option value="-1">– select –</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Select>
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
