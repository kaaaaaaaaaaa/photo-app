import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import PhotoCart from "../PhotoCart/PhotoCart";
import { Col, Row } from "reactstrap";

PhotoList.propTypes = {};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;
//   console.log({ photoList });


  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCart
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
