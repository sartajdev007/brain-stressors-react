import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { id, options, question, correctAnswer } = quiz;
    const [showAnswer, setShowAnswer] = useState(false)


    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast('Congrats! Your answer is correct')
        }
        else {
            toast('Beep!Your answer is wrong')
        }
    }

    return (
        <div className='border-2 m-10 bg-sky-300 shadow-2xl p-8 rounded-xl'>
            <h2 className='font-semibold text-xl'>{question.split('<p>').join('').split('</p>').join('')}</h2>
            <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? <EyeSlashIcon className="h-6 w-6 text-white"></EyeSlashIcon> : <EyeIcon className="h-6 w-6 text-white"></EyeIcon>}</button>
            <p className="text-indigo-700 font-bold text-md">{showAnswer && correctAnswer}</p>
            <div className='grid lg:grid-cols-2 gap-2 p'>
                {
                    options.map(option =>
                        <div className='border border-black p-10 mt-5 shadow-lg rounded-lg'>
                            <label className="label cursor-pointer">
                                <input onClick={() => handleAnswer(option)} type="radio" name="radio-6" className="radio checked:bg-red-500" />
                                <ToastContainer />
                                <span className="label-text">{option}</span>
                            </label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;