import React from 'react'

const Preview = () => {
    return (
        <div className="container md:mt-1">
            <div className="flex flex-col items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-green-500" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div className="mt-3 text-xl font-semibold uppercase text-green-500">
                    Done !
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    The exam has been created successfully.
                </div>
                <a className="mt-10" href="/dashboard">
                    <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
                        Preview
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Preview