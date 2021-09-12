import { PHOTO_CATEGORY_OPTIONS } from "constants/global"; //use jsconfig.jsson
import React from "react";
import Select from "react-select";
import { Form, FormGroup, Input, Label } from "reactstrap";

import '../pages/AddEdit/styles.scss'


function PhotoForm(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="titleId">Title</Label>
          <Input
            name="title"
            id="titleId"
            placeholder="Enter your title..."
          />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Category</Label>
          <Select
            name="categoryId"
            id="categoryId"
            placeholder="What's your photo category "
            options={PHOTO_CATEGORY_OPTIONS}
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default PhotoForm;
