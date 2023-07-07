import { useNavigate, useLocation } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

    const navigate = useNavigate();

    const { signInWithGoogle } = useAuth();

    const handleGoogle = () => {


        signInWithGoogle()
            .then((result: any) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL, role: 'user' }

                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: `Hello ${saveUser.name}`,
                                text: 'Account create successfully'
                            });
                            navigate('/dashboard/home');
                        }
                        else if (data.message == 'User already exists') {
                            Swal.fire({
                                icon: 'success',
                                title: `Welcome back ${saveUser.name}`,
                                text: 'Account login successfully'
                            });
                            navigate('/dashboard/home')
                        }
                    })
            }

            )
            .catch((err: any) => console.log(err))


    }

    return (
        <div>
            <div className='bg-[#50DBB4] px-5 py-3 border-e-2' >
                <h2 className='text-3xl uppercase font-semibold tracking-wider' >Fast Box</h2>
                <p className='text-sm text-slate-500 font-medium tracking-widest' >Courier System</p>
            </div>
            <div className="min-h-[30rem] grid place-content-center">
                <div className='text-center' >
                    <h3 className="text-xl font-medium">Login Now</h3>
                    <div className='mt-5' >
                        <button onClick={handleGoogle} className='flex items-center gap-2 px-5 py-2 border-2 border-[#1FAA59] rounded-xl '>
                            <FcGoogle className="text-4xl" />
                            <span className='text-xl font-medium text-[#14512d]' >Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;