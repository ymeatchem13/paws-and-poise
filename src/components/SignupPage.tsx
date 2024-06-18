import axios from "axios";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
    // const [values, setValues] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     petName: '',
    //     petBreed: ''
    // })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            petName: '',
            petBreed: ''
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(30, "Your password must contain between 4 and 30 characters.")
            .required("Your password must contain between 4 and 30 characters.")
            .min(4, "Your password must contain between 4 and 30 characters."),
          email: Yup.string()
            .email("Please enter a valid email or phone number")
            .required("Please enter a valid email or phone number"),
          password: Yup.string()
            .max(60, "Your password must contain between 4 and 60 characters.")
            .required("Your password must contain between 4 and 60 characters.")
            .min(4, "Your password must contain between 4 and 60 characters."),
          petName: Yup.string()
            .max(30, "Your password must contain between 4 and 30 characters.")
            .required("Your password must contain between 4 and 30 characters.")
            .min(4, "Your password must contain between 4 and 30 characters."),
          petBreed: Yup.string()
            .max(30, "Your password must contain between 4 and 30 characters.")
            .required("Your password must contain between 4 and 30 characters.")
            .min(4, "Your password must contain between 4 and 30 characters."),
        }),
        onSubmit: (values) => {
          console.log(values);
          handleSubmit(values);
        },
    });

    const navigate = useNavigate()

    function handleSubmit(values: any) {
        //e.preventDefault()

        axios.post('/add_user', values)
            .then((res)=>{
                navigate('/')
                console.log(res)
            })
            .catch((err)=>console.log(err))
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Sign Up</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" className="form-control rounded-0" id="name" aria-describedby="name" placeholder="Enter name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.name && formik.errors.name ? (<p className="text-danger small">{formik.errors.name}</p>) : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email"><strong>Email address</strong></label>
                            <input type="email" className="form-control rounded-0" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.email && formik.errors.email ? (<p className="text-danger small">{formik.errors.email}</p>) : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="petName"><strong>Pet Name</strong></label>
                            <input type="text" className="form-control rounded-0" id="petName" aria-describedby="petName" placeholder="Enter pet name" value={formik.values.petName} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.petName && formik.errors.petName ? (<p className="text-danger small">{formik.errors.petName}</p>) : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="petBreed"><strong>Breed Name</strong></label>
                            <input type="text" className="form-control rounded-0" id="petBreed" aria-describedby="petBreed" placeholder="Enter pet breed" value={formik.values.petBreed} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.petBreed && formik.errors.petBreed ? (<p className="text-danger small">{formik.errors.petBreed}</p>) : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" className="form-control rounded-0" id="password" placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.password && formik.errors.password ? (<p className="text-danger small">{formik.errors.password}</p>) : null}
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
                        <p>You are agreeing to our terms and policies</p>
                        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default SignupPage