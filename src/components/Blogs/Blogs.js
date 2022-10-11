import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl align-middle font-bold'>Blogs</h1>
            <div className='mt-10'>
                <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the purpose of React Router?
                    </div>
                    <div className="collapse-content">
                        <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is context Api?
                        </div>
                        <div className="collapse-content">
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is useRef hook in React?
                        </div>
                        <div className="collapse-content">
                            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;