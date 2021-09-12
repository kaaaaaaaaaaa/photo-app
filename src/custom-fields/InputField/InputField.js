import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    
};

function InputField(props) {
    const {
        field,form, // lấy từ FastField của formik ra
        label, type, placeholder, disabled, //props cua minh tu them 
    
    } = props;

    //bind đủ 4 cái vào control 
    const {name, value, onChange, onBlur}= field;



    return (
        <div>
             <FormGroup>
                { label && <Label for={name}>{label}</Label> }

                <Input
                  id={name}
                  {...field} // lay đủ 4 cái 
                  placeholder={placeholder}
                  type={type}
                  disabled={disabled}
                />
              </FormGroup>


                

        </div>
    );
}

export default InputField;