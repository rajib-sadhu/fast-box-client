

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan,23',
        orders: 20,
        couriers: 15
    },
    {
        name: 'Feb,23',
        orders: 30,
        couriers: 20
    },
    {
        name: 'April,23',
        orders: 15,
        couriers: 15
    },
    {
        name: 'May,23',
        orders: 10,
        couriers: 5
    },
    {
        name: 'June,23',
        orders: 35,
        couriers: 25
    }
];

const Charts = () => {
    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="couriers" stroke="#82ca9d" />
            </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Charts;