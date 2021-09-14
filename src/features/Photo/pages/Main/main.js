import Banner from "components/Banner/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList/PhotoList";
import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {useHistory,useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {removePhoto} from 'features/Photo/PhotoSlice'

MainPage.propTypes = {};

function MainPage(props) {
  // lay cac gt moi add tu store state laf state trong store
  const photos = useSelector((state) => state.photos); //  photos la photos:PhotoReducer => la cai [''] ,
  // console.log(photos)
  const dispatch= useDispatch()
  const history= useHistory();
  const {photoId}= useParams();
  // console.log({photoId})

  //CLICK EDDIT => CHUYẺN TỚI TRANG ADD/EDIT
  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
    
  };
  const handlePhotoRemoveClick = (photo) => {
    console.log("clickkkkkkaaaaaaaa");
    const removePhotoId= photo.id;
    const action= removePhoto(removePhotoId);
    dispatch(action)

  };
  

  console.log("Mainpage");
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        {/* <PhotoList/> */}
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
