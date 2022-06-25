import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ examData: "", setExamData: null });

export function UseContextProvider({ children }) {
    const [examData, setExamData] = useState("");

    return (
    <StepperContext.Provider value={{ examData, setExamData }}>
        {children}
    </StepperContext.Provider>
    );
}

export function useStepperContext() {
    const { examData, setExamData } = useContext(StepperContext);

    return { examData, setExamData };
}
