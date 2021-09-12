import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label : PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultProps = {
  label : "",
  placeholder: "",
  disabled: false,
  options: [],
};




function SelectField(props) {
  const { field, form, options, label, disabled, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
//   const { errors, touched } = form;
console.log({onChange})
  const selectedOption = options.find(option => option.value === value);
//   console.log(selectedOption)

  const handleSelectedOptionChange = (selectedOption) => {
      //truyền vào cái mình click=> lấy ra value =>fake lại event onChange
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    console.log(selectedValue)

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }

  return (
    <div>
      <FormGroup>
      {  label  && <Label for={name}>{label}</Label>}
        <Select
          
          id={name}
          {...field}

          value={selectedOption}
          onChange={handleSelectedOptionChange}
          
          placeholder={placeholder}
          options={options}
          isDisabled={disabled}
        />
      </FormGroup>
    </div>
  );
}

export default SelectField;
