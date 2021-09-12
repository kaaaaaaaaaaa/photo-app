import Banner from 'components/Banner/Banner';
import Images from 'constants/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';


MainPage.propTypes = {
    
};

function MainPage(props) {


  console.log('Mainpage')
    return (
        <div className="photo-main">
          <Banner title="🎉 Your awesome photos 🎉" 
                  backgroundUrl={Images.PINK_BG} />
    
          <Container className="text-center">
            <div className="py-5">
              <Link to="/photos/add">Add new photo</Link>
              <Link to="/photos/add/not">Add new photo</Link>

            </div>
    
            {/* <PhotoList
              photoList={photos}
              onPhotoEditClick={handlePhotoEditClick}
              onPhotoRemoveClick={handlePhotoRemoveClick}
            /> */}
          </Container>
        </div>
      );
}

export default MainPage;