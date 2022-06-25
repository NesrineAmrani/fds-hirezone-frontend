import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import axios from '../../axios';
import AuthUser from '../../authentication/AuthUser';

const Dropdown = () => {

    const { token } = AuthUser();
    const [jobs, setJobs] = useState([]);
    //const [requestError, setRequestError] = useState();
    const [select, setSelect] = useState('Choose a Job');

    useEffect(() => {
        //console.log(token);
        async function fetchData() {

            try {
                const result = await axios.get('/employee/categories'
                    , { headers: { "Authorization": `Bearer ${token}` } }
                );
                //console.log(result.data.data);
                setJobs(result.data.data);
            } catch (err) {
                console.log(err.message);
                //setRequestError(err.message);
            }

        }
        fetchData();

    }, []);

    return (
        <div className="group inline-block ml-3 mb-3 ">
            <button
                className="w-64 outline-none focus:outline-none border px-3 py-1 bg-white rounded-lg flex items-center"
            >
                <span className="pr-1 font-semibold flex-1">{select}</span>
                <span>
                    <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                    </svg>
                </span>
            </button>

            <ul
                className="bg-white border rounded-lg transform scale-0 group-hover:scale-100 absolute 
                    transition duration-150 ease-in-out origin-top w-64"
            >
                {
                    jobs.map(job => {
                        return (
                            <li key={job.id} className="rounded-sm px-3 py-1 hover:bg-gray-100">
                                <button value={job.name} onClick={e => setSelect(e.target.value)}>
                                    {job.name}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Dropdown
