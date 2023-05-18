import Image from "components/Image";
import { PostContext } from "context/postContext";
import React, { useContext } from "react";
import ReactQuill from "react-quill";

const SingleContentDemo = () => {
  const postData = useContext(PostContext);
  return (
    <>
      <ReactQuill
        value={postData?.postContent}
        readOnly={true}
        theme={"bubble"}
      />
    </>
  );
};

export default SingleContentDemo;
