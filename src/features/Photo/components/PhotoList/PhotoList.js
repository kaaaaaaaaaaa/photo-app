import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import PhotoCart from "../PhotoCart/PhotoCart";
import { Col, Row } from "reactstrap";
import PhotoTimeline from "../PhotoTimeline/PhotoTimeline";

PhotoList.propTypes = {};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick,productList } =
    props;

  return (
    <Row>
      { productList.length ===0 ? photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCart
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col> 
      )) :<PhotoTimeline
      photoList={productList}
      /> }
    </Row>
  );
}

export default PhotoList;
