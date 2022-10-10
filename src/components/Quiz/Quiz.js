import React, { useState } from 'react';

const Quiz = ({ quiz }) => {
    const { options, question, correctAnswer } = quiz;
    const { answer, setAnswer } = useState('')

    const handleAnswer = correctAnswer => {
        const selected = answer.find(select => select.length === correctAnswer.length);
        if (selected) {
            alert('You are right')
        }
        else {
            alert('Try again')
        }
    }

    return (
        <div className='border-2 m-10 bg-violet-300 shadow-2xl p-8'>
            <h2 className='font-semibold text-xl'>{question}</h2>
            <div className='grid grid-cols-2 gap-2 p'>
                {
                    options.map(option =>
                        <div className='border-2 border-black p-10 mt-5'>
                            <button onClick={handleAnswer}>{option}</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;