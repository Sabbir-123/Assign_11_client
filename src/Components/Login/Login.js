import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Constexts/AuthpProvider';

import swal from 'sweetalert';

const Login = () => {
    const [error, setError]= useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {signIn,  
        signinGoogle,
    } = useContext(AuthContext);

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            swal('User Logged In');
            navigate(from, {replace: true});
            form.reset();
            setError('');

        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })

    }

    const handleGoogleSignIn =()=>{
        signinGoogle()
        .then(result =>{
          console.log(result.user);
          swal('Google Log in Successful')
          navigate(from, {replace: true});
        })
        .catch((error)=>{
          swal(error.message)
        })
      }
    return (
<div>
<div className='grid justify-center bg-gray-500 py-5 violetColor'>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-xl shadow-violet-800 textColor purple">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="username" className="block">Email</label>
			<input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 text-black" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md focus:border-violet-400 text-black" />
			<div className="flex justify-end text-xs  ">
				<Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-800"></div>
		<p className="px-3 text-sm  ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-800"></div>
	</div>
	<div className="flex justify-center space-x-4 ">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 border rounded-full shadow-md shadow-slate-300">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6">Don't have an account?
		<Link rel="noopener noreferrer" to={'/register'} className="underline text-gray-500 text-lg font-bold ">Sign up</Link>
	</p>
</div>
</div>
</div>
    );
};

export default Login