import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();

    return (
        <div>
            <div className='hero min-h-screen bg-base-200'>
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1584697964190-7383cbee8277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">It's Time To Take a Test!</h1>
                        <p className="py-6">Let's test what you know about the world of Web Development</p>
                    </div>
                </div>
            </div>
            {/* hero section end */}
            <div className='mt-10 mb-10 gap-5 flex flex-col align-middle justify-center md:flex-row lg:flex-row'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;