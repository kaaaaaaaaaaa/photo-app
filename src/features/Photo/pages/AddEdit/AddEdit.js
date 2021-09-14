import Banner from "components/Banner/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/PhotoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  //sau khi click edit xasc dinh item=> lay id dc truyen tu url=> edit
  const { photoId } = useParams();
  // console.log(photoId);

  // tìm lấy giá tri rong redu ma dang dc edit
  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  console.log(editPhoto);
  const isAddMode = !photoId; // k có param thì mode ADD
  //ADD/EDIT PHOTO

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;
  const handelSubmit = (values) => {
    if (isAddMode) {
      // console.log("form submit: ", values);
      const action = addPhoto(values);
      // console.log(action);
      dispatch(action);
      // redirect ve trang chu
    } else {
      const action = updatePhoto(values);
      dispatch(action);
    }
    history.push("/photos");

    // add roi=> vao trang chu ket noi redux store lay cac gia tri dc add ve
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" backgroundUrl={Images.BLUE_BG} />

      <div className="photo-edit__form">
        <PhotoForm 
            onSubmit={handelSubmit}
            initialValues={initialValues} 
            isAddMode={isAddMode}/>
      </div>
    </div>
  );
}

export default AddEditPage;
