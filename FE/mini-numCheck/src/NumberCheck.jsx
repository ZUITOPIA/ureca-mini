import { useEffect, useState } from "react";
import styles from "./NumberGuessPage.module.css";

export default function NumberCheck({
    tryCount,
    setAnswerHistory,
    answerHistory,
    setTryCount,
    setTryHistory,
    tryHistory,
    setResult,
}) {
    //난수 발생
    const [com_num, setCom_num] = useState(Math.floor(Math.random() * 100 + 1)); //1~100

    //사용자가 입력한 데이터를 (상태)관리
    const [user_num, setUser_num] = useState("");

    const [newGameDisable, setNewGameDisable] = useState(true); //새게임 유무
    const [gameDone, setGameDone] = useState(false); //정답확인버튼 (게임끝 여부)

    const [gameCnt, setGameCnt] = useState(1); //게임 횟수

    const checkNum = () => {
        let historyStr = `${tryCount}번째 시도 [${user_num}]: `;
        //값비교  ==결과==> 낮춰주세요!/높여주세요!
        //기준값 ==> 난수를 발생
        if (user_num > com_num) {
            //사용자 입력값이 높을때
            historyStr = `${historyStr} 낮춰주세요!`;
        } else if (user_num < com_num) {
            //사용자 입력값이 낮을때
            historyStr = `${historyStr} 높여주세요!`;
        } else {
            //정답
            historyStr = `${historyStr} 정답입니다^O^`;
            setNewGameDisable(false); //새게임버튼 활성화
            setGameDone(true); //게임끝(정답맞춤)
            setAnswerHistory([...answerHistory, `${gameCnt}번째 정답: ${com_num} `]);
            setGameCnt(gameCnt + 1);
        }
        setUser_num(""); //사용자 입력값 지우기
        setTryCount(tryCount + 1); //시도 횟수 증가
        setResult(historyStr);
        setTryHistory([historyStr, ...tryHistory]); //시도한 결과 문자열을 배열에 저장(히스토리 남김)

        if (tryCount === 10) {
            alert("10번의 시도가 끝났습니다.");

            setAnswerHistory([...answerHistory, `${gameCnt}번째 정답: ${com_num} `]);
            setGameCnt(gameCnt + 1);
            newGame();
        }
    }; //checkNum

    const newGame = () => {
        setUser_num(""); //사용자 입력값 지우기
        setTryCount(1); //시도 횟수 초기화
        setTryHistory([]); //히스토리 배열 초기화

        setCom_num(Math.floor(Math.random() * 100 + 1)); //새로운 com숫자 적용

        setNewGameDisable(true); //새게임버튼 비활성화
        setGameDone(false); //정답확인 버튼 활성화
    }; //newGame

    const handleChange = event => {
        //HTML마크업의 변경된 값을 state에 반영
        setUser_num(event.target.value);
    };

    const handleKeyDown = event => {
        //콜백함수 ==> 매개변수에 이벤트 관련정보가 default 전달됨!!
        console.log("handleKeyDown called", event);

        //  key: "Enter"
        //  keyCode : 13

        // if(event.keyCode === 13)
        if (!gameDone && event.key === "Enter") {
            //게임을 진행중이라면  &&  'Enter'
            checkNum();
        }
    }; //handleKeyDown

    useEffect(() => {
        console.log(com_num);
    });
    return (
        <>
            {tryCount < 11 ? (
                <p className={styles.attemptCount}>{tryCount}번째 시도</p>
            ) : (
                <p className={styles.attemptCount}>최대 시도 횟수에 도달했습니다. </p>
            )}

            <input
                type="number"
                min="1"
                max="100"
                value={user_num}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={styles.inputField}
            />

            <button onClick={checkNum} disabled={gameDone} className={styles.button}>
                정답확인
            </button>
            <button onClick={newGame} disabled={newGameDisable} className={styles.button}>
                새 게임
            </button>
        </>
    );
}
