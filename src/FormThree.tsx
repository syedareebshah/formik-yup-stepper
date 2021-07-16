import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css'
import Button from '@material-ui/core/Button';

interface Props {
    handleNext: () => void
}

const FormThree: React.FC<Props> = ({ handleNext }) => {

    return (
        <Formik
            initialValues={{
                hostle: '',
                room: "",
            }}

            validationSchema={Yup.object(
                {
                    hostle: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('*This field is compulsory'),
                    room: Yup.number()
                        .max(100).min(1)
                        .required('*This field is compulsory'),

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
                <label>Hostle Name</label>
                <br />
                <Field name="hostle" type="text" />
                <br />
                <p className='err'><ErrorMessage name="hostle" /></p>
                <br />

                <label>Room No</label>
                <br />
                <Field name="room" type="number" />
                <br />
                <p className='err'><ErrorMessage name="room" /></p>
                <br />

                <Button type="submit" variant="contained" color="primary">
                    Next
                </Button>
                <br />
            </Form>

        </Formik>
    );
};

export default FormThree;