import React from 'react'
import { useStepperContext } from "../../../contexts/StepperContext";

const Questions = () => {

    const { examData, setExamData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExamData({ ...examData, [name]: value });
    };

    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Type or choose Questions
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={handleChange}
                        value={examData["question"] || ""}
                        name="question"
                        placeholder="The Question"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>

        </div>
    )
}

export default Questions
