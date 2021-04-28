import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useCreateComment from "../../../common/hooks/useCreateComment";
import { config } from "../../../config/api";

const CommentForm = ({ id_forum }) => {
  const { register, handleSubmit } = useForm();
  const { mutate: createComment } = useCreateComment();
  const submit = ({ content_cmt }) => {
    createComment({ content_cmt, id_forum });
  };
  const user = useSelector((state) => state?.userStatus?.userInfo);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div class="comment">
        <div class="info_cmt">
          <img
            class="img_cmt"
            src={`${config.resourse}${user?.avatar}`}
            alt=""
          />
          {/* <h3 class="name_auth">{{Session::get('name')}}</h3> */}
        </div>
        <input
          class="input_cmt"
          placeholder="Nhập để bình luận"
          name="cmt"
          id="cmt_input"
          {...register("content_cmt")}
        />
      </div>
      <div class="btn_cmt">
        <input class="btn btn-primary" type="submit" value="Bình luận" />
      </div>
    </form>
  );
};

export default CommentForm;
