import React from 'react';

const Topics = () => {
    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://plus.unsplash.com/premium_photo-1661679026942-db5aef08c093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">It's Time To Take a Test!</h1>
                    <p className="py-6">Let's test what you know about the world of Web Development</p>
                </div>
            </div>
        </div>
    );
};

export default Topics;