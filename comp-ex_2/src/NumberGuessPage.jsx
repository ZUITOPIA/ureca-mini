import { useEffect, useState } from "react";
import NumberCheck from "./NumberCheck";
import PrintHistory from "./PrintHistory";

export default function NumberGuessPage() {
    const [tryCount, setTryCount] = useState(0); //시도횟수
    const [result, setResult] = useState("");
    const [tryHistory, setTryHistory] = useState([]); //시도이력
    const [answerHistory, setAnswerHistory] = useState([]); //정답이력

    useEffect(() => {
        setTryCount(tryCount + 1);
    }, []);
    return (
        <>
            <h1>숫자맞추기</h1>
            <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>

            <NumberCheck
                tryCount={tryCount}
                setTryCount={setTryCount}
                setResult={setResult}
                tryHistory={tryHistory}
                setTryHistory={setTryHistory}
                answerHistory={answerHistory}
                setAnswerHistory={setAnswerHistory}
            />
            <div>{tryHistory.length > 0 && <> 확인결과 ▶ {result} </>}</div>

            {/* 게임 당, 실시간 결과 확인 */}
            <PrintHistory tryHistory={tryHistory} />

            {/* 매 게임 당 정답 보여주기*/}
            {answerHistory.length > 0 && (
                <>
                    <h2 style={{ color: "blue" }}>정답히스토리</h2>
                    <PrintHistory tryHistory={answerHistory} />
                </>
            )}
        </>
    );
}
