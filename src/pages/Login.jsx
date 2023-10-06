import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

    const {signIn}= useContext(AuthContext)
    const location =useLocation()
    console.log( 'location',location);
    const navigate =useNavigate()

    const handleLogin =(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email= form.get('email');
        const password= form.get('password');
         console.log(form.get('email'));
         signIn(email,password)
         .then(result=>{
            console.log(result.user);
           navigate(location?.state ? location.state :'/');

         })
         .then(error=>{
            console.log(error.message);
         })

    }
    return (
        <div>
            <Navbar></Navbar>
           <div>
           <h2 className="text-3xl text-center">Please login </h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email"
                    name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-4"> Do not have on account <Link className="text-blue-900 font-bold " to='/register'>Register</Link></p>

            </form>
           </div>


        </div>
    );
};

export default Login;