import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const  {createUser}= useContext(AuthContext)
    const handleRegister =(e)=>{
        e.preventDefault()
    
        const form = new FormData(e.currentTarget);
        const email= form.get('email');
        const password= form.get('password');
         console.log(form.get('email'));
         //use context
         createUser(email,password)
         .then(result =>{
            console.log(result.user);
         })
         .then(error=>{
            console.error(error);
         })
    }
    return (

        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center">Please Register  </h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto" >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name"
                        name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Your photo url"
                        name="img" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4"> All ready have on account <Link className="text-blue-900 font-bold " to='/login'>Login</Link></p>

            </form>
        </div>




    );
};

export default Register;