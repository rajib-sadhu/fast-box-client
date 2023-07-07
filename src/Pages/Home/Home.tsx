
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="h-screen grid place-content-center" >
            <div>
                <h1 className="text-4xl font-bold tracking-wider" >WELCOME TO FAST BOX</h1>
                <div className='mt-5 flex items-center justify-center gap-3'>
                    <Link className='px-6 up rounded-lg pt-1 pb-2 text-xl bg-[#1C8D73] text-[#aaffe7] ' to='/login'>Login</Link>
                    <Link className='px-6 up rounded-lg pt-1 pb-2 text-xl bg-[#6EC72D] font-medium' to='/dashboard/home'>Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;