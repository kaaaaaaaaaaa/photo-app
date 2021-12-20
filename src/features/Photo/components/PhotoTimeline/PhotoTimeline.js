import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import './PhotoTimeline.scss'


function PhotoTimeline(props) {
  const { photoList } = props;

  return (

    photoList.map((photo) =>(
      <div key={photo._id}>
      <div className="photo-timeline ">
      <h3 className="photo-timeline__title">{photo.title}</h3>
        <img src={photo.imageUrl} alt={photo.title} />
      </div>
    </div>
    ))
  
  );
}

export default PhotoTimeline;
