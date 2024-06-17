import Navbar from "./Navbar";

const SignupPage = () => {
    return (
        <>
            <Navbar />

            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="firstName" placeholder="First Name"></input>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="lastName" placeholder="Last Name"></input>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
export default SignupPage