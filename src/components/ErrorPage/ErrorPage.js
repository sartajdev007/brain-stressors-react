import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='flex flex-col min-h-[400px] justify-center items-center'>
            <h1 className='text-2xl'>No!! You've made a mistake</h1>
            <br />
            {error && (
                <div>
                    <p className='text-orange-700'>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;