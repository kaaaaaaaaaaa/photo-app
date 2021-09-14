import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import './PhotoCart.scss'

PhotoCart.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};
PhotoCart.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCart(props) {
  const { photo,  onEditClick, onRemoveClick } = props;
const handleEditClick=() => {
  if(onEditClick) {
    // console.log(photo)
    onEditClick(photo);
  }
}
const handleRemoveClick=() => {
  if(onRemoveClick) {
    // console.log(photo)
    onRemoveClick(photo);
  }
}


  return (
    <div>
      <div className="photo">
        <img src={photo.photo} alt={photo.title} />

        <div className="photo__overlay">
          <h3 className="photo__title">{photo.title}</h3>

          <div className="photo__actions">
            <div>
              <Button outline size="sm" color="light" 
                      onClick={handleEditClick}>
                Edit
              </Button>
            </div>

            <div>
              <Button
                outline
                size="sm"
                color="danger"
                onClick={handleRemoveClick}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCart;
