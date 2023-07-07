import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='h-screen overflow-y-hidden'>
            <div>
                <Header />
            </div>
            <div className='grid grid-cols-4' >
                <div className='col-span-1' >
                    <Navbar />
                </div>
                <div className='col-span-3 p-5'>
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default Main;