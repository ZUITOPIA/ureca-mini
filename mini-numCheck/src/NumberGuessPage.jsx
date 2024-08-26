import React, { useEffect, useState } from "react";
import NumberCheck from "./NumberCheck";
import PrintHistory from "./PrintHistory";
import styles from "./NumberGuessPage.module.css"; // 스타일 시트 임포트

export default function NumberGuessPage() {
    const [tryCount, setTryCount] = useState(0);
    const [result, setResult] = useState("");
    const [tryHistory, setTryHistory] = useState([]);
    const [answerHistory, setAnswerHistory] = useState([]);

    useEffect(() => {
        setTryCount(tryCount + 1);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>숫자맞추기</h1>
            <p className={styles.description}>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>

            <NumberCheck
                tryCount={tryCount}
                setTryCount={setTryCount}
                setResult={setResult}
                tryHistory={tryHistory}
                setTryHistory={setTryHistory}
                answerHistory={answerHistory}
                setAnswerHistory={setAnswerHistory}
            />
            <div className={styles.results}>{tryHistory.length > 0 && <> 확인결과 ▶ {result} </>}</div>

            <PrintHistory tryHistory={tryHistory} />

            {answerHistory.length > 0 && (
                <>
                    <h2 className={styles.historyTitle}>정답히스토리</h2>
                    <PrintHistory tryHistory={answerHistory} />
                </>
            )}
        </div>
    );
}
