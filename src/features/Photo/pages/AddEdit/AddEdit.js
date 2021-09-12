import Banner from "components/Banner/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";


AddEditPage.propTypes = {};

function AddEditPage(props) {


  console.log('AddEditPage')
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" 
            backgroundUrl={Images.BLUE_BG} />

            <div className="photo-edit__form">
                <PhotoForm/>
            </div>
    </div>
  );
}

export default AddEditPage;
