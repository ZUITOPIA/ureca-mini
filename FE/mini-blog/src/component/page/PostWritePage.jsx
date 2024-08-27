import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useState } from "react";
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

export default function PostWritePage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSave = () => {
        const newPost = {
            id: Date.now(), // 고유 id 값
            title,
            content,
        };

        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        savedPosts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(savedPosts));
        navigate("/");
    };

    return (
        <Wrapper>
            <Container>
                <TextInput height={20} onChange={e => setTitle(e.target.value)} value={title} />
                <TextInput height={480} onChange={e => setContent(e.target.value)} value={content} />
            </Container>
            <Button title="작성완료" onClick={handleSave} />
        </Wrapper>
    );
}
