export default function Result({ myPick, comPick, result }) {
    return (
        <>
            <div>
                <h3>당신의 선택 : {myPick} </h3>
            </div>
            <div>
                <h3>컴퓨터의 선택 : {comPick}</h3>
            </div>
            <div>
                <h3>결과 : {result} </h3>
            </div>
        </>
    );
}
