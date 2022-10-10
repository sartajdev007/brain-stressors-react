import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={logo} alt="" className='w-50' /></figure>
            <div className='card-body items-center text-center'>
                <h2 className='card-title'>{name}</h2>
                <p>Total Quizes: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;