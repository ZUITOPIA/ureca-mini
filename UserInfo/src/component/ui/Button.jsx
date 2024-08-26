import styled from "styled-components";

export default function Button(props) {
    const Style = {
        Button: styled.button`
            padding: 8px 16px;
            font-size: 16px;
            cursor: pointer;
            border: 0;
            border-radius: 6px;
        `,
    };

    const { title, onClick } = props;
    return (
        <>
            <Style.Button onClick={onClick}>{title || "button"}</Style.Button>
        </>
    );
}
