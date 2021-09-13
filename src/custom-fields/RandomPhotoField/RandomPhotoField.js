import RandomPhoto from "custom-fields/RandomPhoto/RandomPhoto";
import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup } from "reactstrap";

RandomPhotoField.propTypes = {};

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field; //bind 4 gt vao
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      <RandomPhoto
        name={name} //name
        imageUrl={value} //value
        onImageChange={handleImageChange} //onchange c
        onRandomButtonBlur={onBlur} //onBlur
      />

      <div className="is-invalid"></div>
      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

export default RandomPhotoField;
