import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const stats = useLoaderData()
    return (

        <div className='flex-col justify-center align-middle mt-5'>
            <h2 className='text-2xl font-semibold'>Number of questions in each section</h2>
            <div className='mt-10'>
                <BarChart className='align-center' width={730} height={250} data={stats.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="rgb(4 120 87)" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;