import { PHOTO_CATEGORY_OPTIONS } from "constants/global"; //use jsconfig.jsson
import InputField from "custom-fields/InputField/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField/RandomPhotoField";
import SelectField from "custom-fields/SelectField/SelectField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import "../pages/AddEdit/styles.scss";

// PhotoForm.propTypes = {
//   onsubmit: PropTypes.func,
// };

// PhotoForm.prototype = {
//   onsubmit: null,
// }
function PhotoForm(props) {
  // khai bao gia tri khoi tao cho formik
  const initialValues = {
    title: "",
    categoryId: null,
    photo: null
  };
  return (
    <div>
      <Formik initialValues={initialValues}
      onsubmit={value=>console.log('submited!')}
      >
        
        {/* nhận vào cái hàm , truyền cho mình các formik props */}
        {(formikProps) => {
          //do somethings ...
          const { values, errors, touched } = formikProps;
          console.log({ values, errors, touched });

          //return ui
          return (
            <Form>
              {/* khai bao 1 conntrol dung <Field/> hoac <FastField/> */}
              <FastField //props của FastField
                name="title"
                component={InputField} //cac props dc truyền vào
                label="Title"
                placeholder="Enter your title..."
              />

              <FastField
                name="categoryId"
                component={SelectField}
                label="Category"
                options={PHOTO_CATEGORY_OPTIONS}
                placeholder="what's in the category..."
              />

              <FastField
                name="photo"
                component={RandomPhotoField}
                
                label=" Photo"
               
              />

              <FormGroup >
                <Button type="submit">Add to album</Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default PhotoForm;
