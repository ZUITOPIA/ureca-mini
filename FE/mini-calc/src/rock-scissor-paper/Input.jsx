import { useEffect, useState } from "react";
import Result from "./Result";

export default function Input() {
    const cases = ["rock", "scissor", "paper"];

    const [myPick, setMyPick] = useState("");
    const [comPick, setComPick] = useState("");
    const [result, setResult] = useState("");

    const getComputerPick = cases => cases[Math.floor(Math.random() * cases.length)];

    const getMyPick = e => {
        setMyPick(e.target.value);
    };

    useEffect(() => {
        if (myPick) {
            const computerPick = getComputerPick(cases);
            setComPick(computerPick);

            if (myPick === computerPick) {
                setResult("비김");
            } else if (
                (myPick === "scissor" && computerPick === "paper") ||
                (myPick === "rock" && computerPick === "scissor") ||
                (myPick === "paper" && computerPick === "rock")
            ) {
                setResult("내가 승");
            } else {
                setResult("컴퓨터 승");
            }
        }
    }, [myPick]);

    return (
        <>
            <div>
                <button onClick={getMyPick} value="scissor">
                    가위
                </button>
                <button onClick={getMyPick} value="rock">
                    바위
                </button>
                <button onClick={getMyPick} value="paper">
                    보
                </button>
            </div>
            <Result myPick={myPick} comPick={comPick} result={result} />
        </>
    );
}
