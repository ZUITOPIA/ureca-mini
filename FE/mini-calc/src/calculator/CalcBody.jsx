import { useCalc } from "./useCalc";
import CalcResult from "./CalcResult";
import { useState } from "react";

export default function CalcBody() {
    const { firstNum, setFirstNum, secondNum, setSecondNum, operator, setOperator } = useCalc();

    const [isShow, setIsShow] = useState(false);

    const [result, setResult] = useState("");

    const handleCalculate = () => {
        let result;
        switch (operator) {
            case "+":
                setResult(`${firstNum} ${operator} ${secondNum} =` + firstNum + secondNum);
                setIsShow(true);
                break;
            case "-":
                setResult(`${firstNum} ${operator} ${secondNum} =` + (firstNum - secondNum));
                setIsShow(true);
                break;
            case "x":
                setResult(`${firstNum} ${operator} ${secondNum} =` + firstNum * secondNum);
                setIsShow(true);
                break;
            case "/":
                setResult(`${firstNum} ${operator} ${secondNum} =` + firstNum / secondNum);
                setIsShow(true);
                break;
            default:
                result = 0;
        }
    };

    return (
        <>
            <div>
                <input type="number" value={firstNum} onChange={e => setFirstNum(Number(e.target.value))} />
                <select id="selected" value={operator} onChange={e => setOperator(e.target.value)}>
                    <option name="plus" value="+">
                        +
                    </option>
                    <option name="minus" value="-">
                        -
                    </option>
                    <option name="plus" value="x">
                        x
                    </option>
                    <option name="minus" value="/">
                        /
                    </option>
                </select>
                <input type="number" value={secondNum} onChange={e => setSecondNum(Number(e.target.value))} />
                <button onClick={handleCalculate}>계산</button>
                {isShow && <CalcResult result={result} operator={operator} />}
            </div>
        </>
    );
}
