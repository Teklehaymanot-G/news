import React, { useState, useEffect } from "react";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Label from "components/Label/Label";
import Layout from "../../layout";
import LayoutDashboard from "../layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { render } from "@testing-library/react";
import { Combobox } from "@headlessui/react";
import Tags from "@yaireo/tagify/dist/react.tagify";

const baseTagifySettings = {
  blacklist: [],
  maxTags: 6,
  backspace: "edit",
  placeholder: "type something",
  editTags: 1,
  dropdown: {
    enabled: 0,
  },
  callbacks: {},
};

function TagField({ label, name, initialValue = [], suggestions = [] }: any) {
  const handleChange = (e: any) => {
    console.log(
      e.type,
      " ==> ",
      e.detail.tagify.value.map((item: any) => item.value)
    );
  };

  const settings = {
    ...baseTagifySettings,
    whitelist: suggestions,
    callbacks: {
      add: handleChange,
      remove: handleChange,
      blur: handleChange,
      edit: handleChange,
      invalid: handleChange,
      click: handleChange,
      focus: handleChange,
      "edit:updated": handleChange,
      "edit:start": handleChange,
    },
  };

  console.log("InitialValue", initialValue);

  return (
    <div className="form-group">
      <label htmlFor={"field-" + name}>{label}</label>
      <Tags />
    </div>
  );
}

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const tagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  backspace: "edit",
  addTagOnBlur: false,
  dropdown: {
    enabled: 0, // a;ways show suggestions dropdown
  },
};

const whitelistFromServer = [
  "aaa",
  "aaa1",
  "aaa2",
  "aaa3",
  "bbb1",
  "bbb2",
  "bbb3",
  "bbb4",
];

const DashboardSubmitPost = () => {
  const [title, setTitle] = useState("");
  const [postExcerpt, setPostExcerpt] = useState("");
  const [categoriesId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [tags, setTags] = useState("");
  const [audio, setAudio] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postType, setPostType] = useState("Standard");
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  const [categoryList, setCategoryList] = useState([{ id: "", name: "" }]);
  const [authorList, setAuthorList] = useState([{ id: "", displayName: "" }]);
  const [postList, setPostList] = useState([]);

  // function callback(e) {
  //   console.log(`%c ${e.type}: `, "background: #222; color: #bada55", e.detail);
  // }

  const settings = {
    ...tagifySettings,
    // callbacks: callbacks,
    // whitelist: whitelist || [],
  };

  // const callbacks = {
  //   add: callback,
  //   remove: callback,
  //   input: callback,
  //   edit: callback,
  //   invalid: callback,
  //   click: callback,
  // };

  const [value, showDropdown] = useState({
    whitelist: whitelistFromServer,
    showDropdown: "a",
  });

  useEffect(() => {
    let categoryParsed = JSON?.parse(
      localStorage.getItem("categories") || "[]"
    );
    setCategoryList(categoryParsed);

    let authorParsed = JSON?.parse(localStorage.getItem("authors") || "[]");
    setAuthorList(authorParsed);

    let postParsed = JSON?.parse(localStorage.getItem("posts") || "[]");
    setPostList(postParsed);
  }, []);

  function encodeImageFileAsURL(element: any) {
    // console.log(element.target.files);
    var file = element?.target?.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setFeaturedImage(reader?.result?.toString() || "");
      // console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  }
  function encodeAudioFileAsURL(element: any) {
    // console.log(element.target.files);
    var file = element?.target?.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setAudio(reader?.result?.toString() || "");
      // console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  }

  const suggestions = [
    "apple",
    "banana",
    "cucumber",
    "dewberries",
    "elderberry",
    "farkleberry",
    "grapes",
    "hackberry",
    "imbe",
    "jambolan",
    "kiwi",
    "lime",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberries",
    "strawberries",
    "tangerine",
    "ugni",
    "voavanga",
    "watermelon",
    "xigua",
    "yangmei",
    "zucchini",
  ];

  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={() => {
              let newData = [
                ...postList,
                {
                  id: Math?.random(),
                  title,
                  postExcerpt,
                  categoriesId,
                  tags,
                  postContent,
                  featuredImage,
                  authorId,
                  postType,
                  audio,
                },
              ];
              localStorage.setItem("posts", JSON.stringify(newData));
            }}
          >
            <label className="block md:col-span-2">
              <Label>Post Title *</Label>

              <Input
                type="text"
                className="mt-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="block md:col-span-2">
              <Label>Post Excerpt</Label>

              <Textarea
                className="mt-1"
                rows={4}
                value={postExcerpt}
                onChange={(e) => setPostExcerpt(e.target.value)}
              />
              <p className="mt-1 text-sm text-neutral-500">
                Brief description for your article. URLs are hyperlinked.
              </p>
            </label>
            <label className="block">
              <Label>Category</Label>

              <Select
                className="mt-1"
                value={categoriesId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="-1">– select –</option>
                {categoryList
                  ?.filter((item) => item?.id !== "")
                  ?.map((cat) => (
                    <option value={cat?.id}>{cat?.name}</option>
                  ))}
              </Select>
            </label>
            <label className="block">
              <Label>Author</Label>

              <Select
                className="mt-1"
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
              >
                <option value="-1">– select –</option>
                {authorList
                  ?.filter((item) => item?.id !== "")
                  ?.map((cat) => (
                    <option value={cat?.id}>{cat?.displayName}</option>
                  ))}
              </Select>
            </label>
            <label className="block md:col-span-2">
              {/* <Label>Tags</Label>

              <Input
                type="text"
                className="mt-1"
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              /> */}

              <Combobox value={selectedPeople} onChange={setSelectedPeople}>
                <Combobox.Input
                  displayValue={(people: any) =>
                    people.map((person: any) => person.name).join(", ")
                  }
                />
                <Combobox.Options>
                  {people.map((person) => (
                    <Combobox.Option key={person.id} value={person}>
                      {person.name}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Combobox>
            </label>

            <label className="block">
              <Label>Type</Label>

              <Select
                className="mt-1"
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
              >
                <option value="-1">– select –</option>
                <option value="Standard">Standard</option>
                <option value="Audio">Audio</option>
              </Select>
            </label>

            {postType === "Audio" && (
              <label className="block">
                <Label>Audio</Label>

                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex flex-col sm:flex-row text-sm text-neutral-6000">
                      <label
                        htmlFor="file-upload-audio"
                        className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload-audio"
                          name="file-upload-audio"
                          type="file"
                          className="sr-only"
                          onChange={(e) => encodeAudioFileAsURL(e)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-neutral-500">MP3 up to 2MB</p>
                  </div>
                </div>
              </label>
            )}
            <div className="block md:col-span-2">
              <Label>Featured Image</Label>

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
                      htmlFor="file-upload-image"
                      className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload-image"
                        name="file-upload-image"
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
            </div>

            <label className="block md:col-span-2">
              <Label> Post Content</Label>
              <ReactQuill
                modules={modules}
                theme="snow"
                placeholder="Content goes here..."
                onChange={setPostContent}
                style={{ height: 400, marginBottom: "30px" }}
              />
              {/* <Textarea className="mt-1" rows={16} /> */}
            </label>

            <Tags />

            <ButtonPrimary className="md:col-span-2 mt-7" type="submit">
              Submit post
            </ButtonPrimary>
            <TagField
              initialValue={["foo", "brazil"]}
              suggestions={suggestions}
            />
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardSubmitPost;
