// UserInfoList.jsx
import React, { useContext, useEffect } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import UserContext from "../hooks/useUserInfo";

const UserInfoList = () => {
    const { users } = useContext(UserContext);

    const navigate = useNavigate();
    const handleMovePage = () => {
        navigate("/userInfo/add");
    };

    const handleUserClick = userId => {
        navigate(`/userInfo/${userId}`);
    };

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <>
            <div>
                <h2>사용자 목록</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => handleUserClick(user.id)}>
                            {user.id} {user.name}, {user.age}, {user.job}
                        </li>
                    ))}
                </ul>
            </div>

            <Button title="등록하기" onClick={handleMovePage} />
        </>
    );
};

export default UserInfoList;
