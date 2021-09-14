import { PHOTO_CATEGORY_OPTIONS } from "constants/global"; //use jsconfig.jsson
import InputField from "custom-fields/InputField/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField/RandomPhotoField";
import SelectField from "custom-fields/SelectField/SelectField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import "../pages/AddEdit/styles.scss";

import * as yup from "yup";

//##########################################################

// PhotoForm.propTypes = {
//   onsubmit: PropTypes.func,
// };

// PhotoForm.prototype = {
//   onsubmit: null,
// }

function PhotoForm(props) {
  // khai bao gia tri khoi tao cho formik
  const {initialValues,isAddMode}=props;

  //VALIDATRION YUP
  const validationSchema = yup.object().shape({
    title: yup.string().required("title is required!"),
    categoryId: yup.number().required("categoryId is required").nullable(),
    photo: yup.string().when("categoryId", {
      is: 1,
      then: yup.string().required("photo is required!"),
      otherwise: yup.string(),
    }),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={props.onSubmit} //props.onSubmit laf props dc thang cha truyeen xuong
      >
        {/* nhận vào cái hàm , truyền cho mình các formik props */}
        {(formikProps) => {
          //do somethings ...
          const { values, errors, touched, isSubmitting } = formikProps;
          //  console.log({ values, errors, touched })

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

              <FormGroup>
                <Button type="submit" color={isAddMode ? 'primary': 'success'}>
                  {isSubmitting && <spinner size="sm" />  }
                  {isAddMode? 'Add to album': "Update album"}
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default PhotoForm;
