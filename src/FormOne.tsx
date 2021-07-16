import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
import Button from '@material-ui/core/Button';

interface Props {
    handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
    
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: "",
                email:"",
                contact:""
            }}

            validationSchema={Yup.object(
                {
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    email: Yup.string().email().required('This field is required.'),
                    contact: Yup.number().positive().required("This field is required"),
                }
            )}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form className='Form'>
                <label>First Name</label>
                <br />
                <Field name="firstName" type="text" />
                <br />
                <p className='err'><ErrorMessage name="firstName" /></p>
                <br />

                <label>Last Name</label>
                <br />
                <Field name="lastName" type="text" />
                <br />
                <p className='err'><ErrorMessage name="lastName" /></p>
                <br />

                <label>Email</label>
                <br />
                <Field name="email" type="text" />
                <br />
                <p className='err'><ErrorMessage name="email" /></p>
                <br />
                
                <label>Contact</label>
                <br />
                <Field name="contact" type="number" />
                <br />
                <p className='err'><ErrorMessage name="contact" /></p>
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Next
                </Button>
                <br />
            </Form>

        </Formik>
    );
};

export default FormOne;