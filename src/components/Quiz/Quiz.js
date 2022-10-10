import React from 'react';

const Quiz = ({ quiz }) => {
    const { options, question, correctAnswer } = quiz
    return (
        <div className='border-2 m-10 border-amber-700 bg-violet-300 shadow-2xl'>
            <h2 className='font-semibold text-xl'>{question}</h2>
            <div>
                {
                    options.map(option =>
                        <div className='grid p-5'>
                            <p className='border-2 border-black p-7'>{option}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;