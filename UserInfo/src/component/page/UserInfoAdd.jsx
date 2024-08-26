// UserInfoAdd.jsx
import styled from "styled-components";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import UserContext from "../hooks/useUserInfo";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export default function UserInfoAdd() {
    const { users, addUser } = useContext(UserContext); // useContext 훅 사용
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userJob, setUserJob] = useState("");

    const navigate = useNavigate();

    const inputUserName = e => {
        setUserName(e.target.value);
    };
    const inputUserAge = e => {
        setUserAge(e.target.value);
    };
    const inputUserJob = e => {
        setUserJob(e.target.value);
    };
    const handleUserInfoAdd = () => {
        if (!userName.trim() || !userAge.trim() || !userJob.trim()) {
            alert("모든 정보를 입력해주세요.");
            return;
        }

        const newUser = {
            id: users.length + 1,
            name: userName,
            age: userAge,
            job: userJob,
        };

        addUser(newUser); // Context에서 addUser 함수 호출
        localStorage.setItem("users", JSON.stringify([...users, newUser]));

        setUserName("");
        setUserAge("");
        setUserJob("");

        console.log("newUser", newUser);
        navigate("/");
    };

    return (
        <Wrapper>
            <MainTitleText>사람 정보 입력</MainTitleText>
            <Container>
                <div>
                    <span>이름 : </span>
                    <input type="text" value={userName} onChange={inputUserName} />
                </div>
                <div>
                    <span>나이 : </span>
                    <input type="text" value={userAge} onChange={inputUserAge} />
                </div>
                <div>
                    <span>직업 : </span>
                    <input type="text" value={userJob} onChange={inputUserJob} />
                </div>

                <div>
                    <Button title="입력" onClick={handleUserInfoAdd} />
                </div>
            </Container>
        </Wrapper>
    );
}
