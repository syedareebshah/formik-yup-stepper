import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
import Button from '@material-ui/core/Button';

interface Props {
    handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {

    return (
        <Formik
            initialValues={{
                faculty: '',
                degree: "",
                major: "",
                marksPercentage: ""
            }}

            validationSchema={Yup.object(
                {
                    faculty: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    degree: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    major: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    marksPercentage: Yup.number().positive().min(1).max(100).required("This field is required"),
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
            <label>Faculty</label>
                <br />
                <Field name="faculty" type="text" />
                <br />
                <p className='err'><ErrorMessage name="faculty" /></p>
                <br />

                <label>Degree</label>
                <br />
                <Field name="degree" type="text" />
                <br />
                <p className='err'><ErrorMessage name="degree" /></p>
                <br />

                <label>Major</label>
                <br />
                <Field name="major" type="text" />
                <br />
                <p className='err'><ErrorMessage name="major" /></p>
                <br />

                <label>Percentage</label>
                <br />
                <Field name="marksPercentage" type="number" />
                <br />
                <p className='err'><ErrorMessage name="marksPercentage" /></p>
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Next
                </Button>
                <br />
            </Form>

        </Formik>
    );
};

export default FormTwo;