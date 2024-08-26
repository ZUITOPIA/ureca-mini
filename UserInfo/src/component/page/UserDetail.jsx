import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
    const navigate = useNavigate();

    const { userId } = useParams();

    const [updatedUser, setUpdatedUser] = useState({
        id: "",
        name: "",
        age: "",
        job: "",
    });

    const deleteUser = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.filter(user => user.id !== parseInt(userId));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/");
    };

    const handleUpdateUser = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map(user => (user.id === parseInt(userId) ? updatedUser : user));
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("사용자 정보가 수정되었습니다.");
        navigate("/");
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUpdatedUser({
            ...updatedUser,
            [name]: value,
        });
    };

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(user => user.id === parseInt(userId));
        if (foundUser) {
            setUpdatedUser(foundUser);
        }
    }, [userId]);

    if (!updatedUser) return <div>사용자를 찾을 수 없습니다.</div>;

    return (
        <>
            <div>
                <h2>사용자 상세 정보</h2>

                <div>
                    <span>이름 : </span>
                    <input name="name" value={updatedUser.name} onChange={handleChange} />
                </div>
                <div>
                    <span>나이 : </span>
                    <input name="age" value={updatedUser.age} onChange={handleChange} />
                </div>
                <div>
                    <span>직업 : </span>
                    <input name="job" value={updatedUser.job} onChange={handleChange} />
                </div>
            </div>
            <div>
                <Button title="수정" onClick={handleUpdateUser} />
                <Button title="삭제" onClick={deleteUser} />
            </div>
            <div>
                <Button
                    title="사람 목록 보기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
        </>
    );
};

export default UserDetail;
