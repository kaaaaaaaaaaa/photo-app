import RandomPhoto from "custom-fields/RandomPhoto/RandomPhoto";
import React from "react";
import { FormGroup } from "reactstrap";

RandomPhotoField.propTypes = {};

function RandomPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field; //bind 4 gt vao

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
    </FormGroup>
  );
}

export default RandomPhotoField;
