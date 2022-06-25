import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import { UseContextProvider } from '../../contexts/StepperContext'
import Job from './steps/Job'
import Skill from './steps/Skill'
import Questions from './steps/Questions'
import Preview from './steps/Preview'

const MyStepper = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Job Type",
        "Skills Required",
        "Questions",
        "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Job />
            case 2:
                return <Skill />
            case 3:
                return <Questions />
            case 4:
                return <Preview />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='md:w-1/2 mx-auto mt-5 shadow-xl rounded-2xl pb-2 bg-white'>
            {/* Stepper */}
            <div className='container horizontal mt-5'>
                <Stepper
                    steps={steps}
                    currentStep={currentStep}
                />
                {/* Display Components */}
                <div className="my-1 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                </div>
            </div>

            {/* Navigation controls */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}
        </div>
    )
}

export default MyStepper
