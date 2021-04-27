import React from "react";
import { useBlog } from "../../common/hooks/useBlog";
import ItemBlog from "./ItemBlog";
function Blog() {
  const [blog, stt] = useBlog();

  console.log(blog);
  return (
    <div>
      <ItemBlog item={blog} />
    </div>
  );
}

export default Blog;
