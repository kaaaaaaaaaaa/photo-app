import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "reactstrap";
import './PhotoTimeline.scss'

import Images from "constants/images";



function PhotoTimeline(props) {
  const { photoList } = props;

  return (

    photoList.map((photo) =>(
      <Col className=" timeline-item" key={photo._id}  >
     <div className="timeline-item__info">
                <ul>
                    <li>
                          <img className="photo-timeline__img" alt="dcdc" src={Images.imgUser} alt=""/> <span>oanhne</span></li>
                    <li>{photo.createdAt}</li>
                    <li>1 min read</li>
                </ul>
                <div className="timeline-item__btn-custom"><i className="fas fa-ellipsis-v"></i></div>
            </div>
            <h2 className="timeline-item__title">{photo.title}</h2>
            <img className="timeline-item__pictute" alt="" src={photo.imageUrl}/>
            <p className="timeline-item__description">{photo.description}</p>
          
    </Col>
    ))
  
  );
}

export default PhotoTimeline;
