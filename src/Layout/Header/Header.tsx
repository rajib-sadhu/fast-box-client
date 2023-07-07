import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: `${user?.email} -  Logout`,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log('User Logout')
            })
            .catch((err: any) => console.log(err))
    }

    return (
        <div className="grid grid-cols-4 bg-[#50DBB4]" >
            <div className=' px-5 py-3 border-e-2' >
                <h2 className='text-3xl uppercase font-bold tracking-wider' >Fast Box</h2>
                <p className='text-sm text-slate-500 font-medium tracking-widest' >Courier System</p>
            </div>
            <div className="col-span-3 px-5 py-3">
                <div className="flex items-center justify-between" >
                    <div className="flex items-center gap-3">
                        <img className="w-12 h-12 bg-slate-400 rounded-full" src={user?.photoURL} alt="" />
                        <div>
                            <h4 className="text-xl font-medium">{user?.displayName}</h4>
                            <p className="text-sm text-slate-700">Role: Admin</p>
                        </div>
                    </div>
                    <div className="space-x-10">
                        <Badge badgeContent={1} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                        <Button onClick={handleLogout} variant="contained" color='error'>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;