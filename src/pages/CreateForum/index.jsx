import React from "react";
import { useForm } from "react-hook-form";
import useCreateForum from "../../common/hooks/useCreateForum";
import useForumCate from "../../common/hooks/useForumCate";

const CreateForum = () => {
  const { register, handleSubmit } = useForm();
  const { mutate: createForum } = useCreateForum();
  const { data } = useForumCate();
  const handle = (data) => {
    createForum(data);
  };
  return (
    <div class="container">
      <form onSubmit={handleSubmit(handle)}>
        <div class="form-group">
          <label for="">Tiêu đề</label>
          <input
            type="text"
            class="form-control"
            name="title_forum"
            id="title_forum"
            {...register("title")}
          />
        </div>
        <div class="form-group">
          <label for="">Slug bài viết</label>
          <input
            type="text"
            class="form-control"
            name="slug_forum"
            id="slug_forum"
          />
        </div>
        <input id="bgcolor" type="hidden" name="bgcolor" value="" />
        <div class="form-group">
          <label>Nội dung </label>
          <textarea
            id="edit_post"
            name="content_forum"
            {...register("content")}
          ></textarea>
        </div>
        <div class="form-group">
          <label>Chủ Đề</label>
          <select class="form-control" name="cate_forum" {...register("cate")}>
            {data?.map((v) => (
              <option value={v?.id_cate}>{v?.name_cate}</option>
            ))}
            {/* @foreach($cate_forum as $key=>$value)
        
      @endforeach */}
          </select>
        </div>
        <button type="submit" class="btn btn-info">
          Đăng
        </button>
      </form>
    </div>
  );
};

export default CreateForum;
