import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // })

    // onChange={(e)=> setValues({...values, email: e.target.value})}
    // onChange={(e)=> setValues({...values, password: e.target.value})}

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          password: Yup.string()
            .max(60, "Your password must contain between 4 and 60 characters.")
            .required("Your password must contain between 4 and 60 characters.")
            .min(4, "Your password must contain between 4 and 60 characters."),
          email: Yup.string()
            .email("Please enter a valid email or phone number")
            .required("Please enter a valid email or phone number"),
        }),
        onSubmit: (values) => {
          console.log(values);
          handleSubmit(values);
        },
    });

    const navigate = useNavigate()

    function handleSubmit(values: any) {
        //e.preventDefault()

        axios.post('/login_user', values)
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
                    <h2>Log In</h2>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="email"><strong>Email address</strong></label>
                            <input type="email" className="form-control rounded-0" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.email && formik.errors.email ? (<p className="text-danger small">{formik.errors.email}</p>) : null}
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" className="form-control rounded-0" id="password" name="password" placeholder="Enter password"  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                            {formik.touched.password && formik.errors.password ? (<p className="text-danger small">{formik.errors.password}</p>) : null}
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Log In</button>
                        <p>You are agreeing to our terms and policies</p>
                        <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default LoginPage