import './App.css';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class App extends React.Component {


  validationSchema() {
    return Yup.object().shape({
      fullname: Yup.string().required('Fullname is required'),
      username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      title: Yup.string()
        .required('Please enter the title')
        .min(3, 'Title must be at least 3 characters')
        .max(20, 'Title must not exceed 20 characters'),
      description: Yup.string()
        .required('Please describe yourself in not more than 50 words')
        .min(5, 'Description must be at least 5 characters')
        .max(50, 'Description must not exceed 50 characters'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
      gender: Yup.bool().oneOf(["male", "female"], 'Please select one'),


    });
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(JSON.stringify(data, null, 2));
  }


  render() {
    const initialValues = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
      description: '',
      title: '',
      GenderMale: false,
      GenderFemale: false
    };
    return (
      <div className="register-form">



        <div style={{ textAlign: 'center' }}><p><b>FORM No 2</b></p>
          <br></br><br></br><br></br></div>
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <div className="form-group">
                <label>Name</label>
                <Field name="fullname" type="text" className="form-control" />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-danger"
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="username"> Username </label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title"> DESCRIPTION </label>
                <Field
                  name="description"
                  type="description"
                  className="form-control"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"> Email </label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title"> TITLE </label>
                <Field
                  name="title"
                  type="title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>


              <div id="my-radio-group">Gender :</div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="One" />
                  &nbsp;
                  Male
                </label>
                &nbsp;&nbsp;
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  &nbsp;
                  Female
                </label>
              </div>
              <br></br>

              <div id="my-radio-group">Hobbies :</div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="Four" />
                  &nbsp;
                  Cycling
                </label>
                &nbsp;&nbsp;
                <label>
                  <Field type="radio" name="picked" value="Five" />
                  &nbsp;
                  Reading
                </label>
                &nbsp;&nbsp;
                <label>
                  <Field type="radio" name="picked" value="Six" />
                  &nbsp;
                  Dancing
                </label>
                &nbsp;&nbsp;
                <label>
                  <Field type="radio" name="picked" value="Seven" />
                  &nbsp;
                  Travelling
                </label>
              </div>






              <br></br>
              <div className="form-group form-check">
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I have read and agree to the Terms
                </label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="text-danger"
                />
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-warning float-right"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
