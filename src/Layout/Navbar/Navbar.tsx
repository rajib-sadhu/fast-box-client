import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='border-e-2 h-screen' >
            <ul className='py-5 px-5 space-y-3 text-xl side-navbar' >
                <li><NavLink to='/dashboard/home'>Dashboard</NavLink></li>
                <li><NavLink to='/dashboard/orders'>Orders</NavLink></li>
                <li><NavLink to='/dashboard/all-users'>All Users</NavLink></li>
                <li><NavLink to='/dashboard/courier-partner'>Courier Partners</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;