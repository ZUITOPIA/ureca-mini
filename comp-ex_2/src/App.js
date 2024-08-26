import "./App.css";
import NumberGuessPage from "./NumberGuessPage";

function App() {
    return (
        <div className="App">
            {/* 게임 이름, 게임 당 현재 시도 횟수, 숫자 input */}
            <NumberGuessPage />
        </div>
    );
}

export default App;
