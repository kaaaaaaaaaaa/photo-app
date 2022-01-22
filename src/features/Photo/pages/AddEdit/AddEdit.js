import Banner from 'components/Banner/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/PhotoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  console.log(editPhoto);
  const isAddMode = !photoId; // mode ADD
  //ADD/EDIT PHOTO

  const initialValues = isAddMode
    ? {
        title: '',
        categoryId: null,
        photo: '',
      }
    : editPhoto;
  const handelSubmit = (values) => {
    if (isAddMode) {
      const action = addPhoto(values);
      dispatch(action);
      // redirect home
    } else {
      const action = updatePhoto(values);
      dispatch(action);
    }
    history.push('/photos');
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" backgroundUrl={Images.BLUE_BG} />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handelSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
