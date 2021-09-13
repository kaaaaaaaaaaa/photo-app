import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";




//##########################################################

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.propTypes = {
  //   name: "",
  //   imageUrl: "",
  //   onImageChange: null,
  //   onRandomButtonBlur: null,
};





function getRandomImageUrl() {
  const randomImageUrl = Math.trunc(Math.random() * 1000);

  return `https://picsum.photos/id/${randomImageUrl}/300/300`;
}

function RandomPhoto(props) {
  const { name, imageUrl, onImageChange, onRandomButtonBlur } = props; //bind vao control
  

  function handelRandomPhotoClick() {
    if (onImageChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageChange(randomImageUrl);
    }
  }
  // console.log(name,imageUrl)
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handelRandomPhotoClick}
        >
          Random Photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && <img src={imageUrl} alt="Please Random again 👻👻👻" />}
      </div>
    </div>
  );
}

export default RandomPhoto;
