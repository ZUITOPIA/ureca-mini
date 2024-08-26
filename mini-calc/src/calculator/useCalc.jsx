import { useState, createContext, useContext } from "react";

const CalcContext = createContext(); // context를 사용하기 위함

export function CalcProvider({ children }) {
    // Context가 공유할 상태의 값과 그 상태를 업데이트하는 함수들을 공급하기 위해 Provider를 만들어 둠
    const [firstNum, setFirstNum] = useState();
    const [secondNum, setSecondNum] = useState();
    const [operator, setOperator] = useState("+");
    return (
        <>
            {/* children에서 공유하고 싶은 상태들을 value로 넘겨주기 */}
            <CalcContext.Provider value={{ firstNum, setFirstNum, secondNum, setSecondNum, operator, setOperator }}>
                {children}
                {/* children의 아이들 => CalcResult, CalcHeader */}
            </CalcContext.Provider>
        </>
    );
}

export function useCalc() {
    return useContext(CalcContext);
}
