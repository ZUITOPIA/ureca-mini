import CalcHeader from "./CalcHeader";
import CalcBody from "./CalcBody";
import { CalcProvider } from "./useCalc";

export default function MyCalc() {
    return (
        <>
            <CalcHeader />
            <CalcProvider>
                {/* children */}
                <CalcBody />
            </CalcProvider>
        </>
    );
}
