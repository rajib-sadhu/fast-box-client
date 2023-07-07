
import image from '../../assets/courier.svg'
import Charts from './Charts';
import PendingList from './PendingList';

const Dashboard = () => {

    const data = [
        {
            id: 1,
            title: "Total Order",
            value: 5
        },
        {
            id: 2,
            title: "Total Users",
            value: 10
        },
        {
            id: 3,
            title: "Total Courier",
            value: 3
        },
        {
            id: 4,
            title: "Courier Partners",
            value: 7
        },
        {
            id: 5,
            title: "Pending",
            value: 3
        },
        {
            id: 6,
            title: "Cancelled",
            value: 1
        },
    ]


    return (
        <div>
            <div className='grid grid-cols-2' >
                <div className='pe-10 grid grid-cols-3 gap-3'>
                    {
                        data.map(v => <div key={v.id} className='p-3 h-20 shadow-xl bg-[#1C8D73] rounded-xl text-right flex justify-between text-white' >

                            <div className='h-10 w-10 bg-[#50dbb471] rounded-full' >

                            </div>
                            <div>
                                <p className='text-3xl font-medium' >{v.value}</p>
                                <h2 className='text-sm font-light text-slate-100' >{v.title}</h2>
                            </div>

                        </div>)
                    }
                    {/* <img src={image} alt="" /> */}
                </div>
                <div className='' >
                    <div>
                        <Charts />
                    </div>
                </div>
            </div>
            <div className='mt-5 grid grid-cols-2 gap-5' >
                <div className='space-y-4'>
                    {/* <button className='p-3 rounded-lg text-start text-xl shadow-lg block w-full' >
                        Add Order
                    </button>
                    <button className='p-3 rounded-lg text-start text-xl shadow-lg block w-full' >
                        Add Order
                    </button>
                    <button className='p-3 rounded-lg text-start text-xl shadow-lg block w-full' >
                        Add Order
                    </button>
                    <button className='p-3 rounded-lg text-start text-xl shadow-lg block w-full' >
                        Add Order
                    </button> */}
                </div>
                <div>
                    <h3 className='text-xl font-medium'>Pending items</h3>
                    <div>
                        <PendingList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;