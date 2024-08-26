// App.js
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//페이지 컴포넌트
import MainPage from "./component/page/MainPage";
import UserInfoAdd from "./component/page/UserInfoAdd";
import UserDetail from "./component/page/UserDetail";
import { UserProvider } from "./component/hooks/useUserInfo";

function App() {
    return (
        <>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<MainPage />}></Route>
                        <Route path="userInfo/add" element={<UserInfoAdd />} />
                        <Route path="userInfo/:userId" element={<UserDetail />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;
