import React from "react";
import ItemForum from "../../common/components/Forum/ItemForum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForum from "../../common/hooks/useForum";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function Forum(props) {
  const [data, query] = useForum();
  const { isLoading, error } = query;
  const alertError = () => {
    toast.error("Lỗi khi tải trang, vui lòng thủ lại sau", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  if (isLoading)
    return (
      <div className="container">
        <Skeleton width={720} height={100} count={10} />
      </div>
    );
  if (error) {
    alertError();
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </>
    );
  }

  return (
    <div className="container">
      {data &&
        data.data.data.map((post) => (
          <>
            <ItemForum post={post}></ItemForum>
          </>
        ))}
    </div>
  );
}

export default Forum;
