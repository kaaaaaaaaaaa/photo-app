import { ErrorMessage } from 'formik';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    
};

function InputField(props) {
    const {
        field,form, // lấy từ FastField của formik ra
        label, type, placeholder, disabled, //props cua minh tu them 
    
    } = props;
    
    //bind đủ 4 cái vào control 
    const {name, value, onChange, onBlur}= field;
    console.log(name)
    const {errors,touched} = form;
    const showError = errors[name] && touched[name]




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

                  invalid={showError} // FormFeedback yeu cau co class invalid trong thang dung truoc no
                />

                {/* {showError && <p>{errors[name]}</p>} */}
                
              {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>}  */}

              {/* formik ho tro <ErrorMessage> */}
              <ErrorMessage name={name} component={FormFeedback}/> 
                 
              </FormGroup>
              

                

        </div>
    );
}

export default InputField;