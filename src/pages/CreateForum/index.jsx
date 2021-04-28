import React from "react";
import { useForm } from "react-hook-form";
import useForumCate from "../../common/hooks/useForumCate";

const CreateForum = () => {
  const { register, handleSubmit } = useForm();
  const { data } = useForumCate();
  return (
    <div class="container">
      <form>
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
            {/* @foreach($cate_forum as $key=>$value)
        <option value="{{$value['id_cate']}}">{{$value['name_cate']}}</option>
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
