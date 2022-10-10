import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData()
    console.log(quizzes.questions)
    return (
        <div>
            {
                quizzes.data.questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                >
                </Quiz>)
            }
        </div>
    );
};

export default Quizzes;