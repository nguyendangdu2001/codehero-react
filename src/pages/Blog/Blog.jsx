import React from "react";
import { useBlog } from "../../common/hooks/useBlog";
import ItemBlog from "./ItemBlog";
function Blog() {
  const [blog, stt] = useBlog();

  return (
    <div>
      <div>
        <ItemBlog item={blog} />
      </div>
    </div>
  );
}

export default Blog;
