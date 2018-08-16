import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

    img {
        width: 150px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        font-size: 18px;
        color: #444;
        border-radius: 3px;
        border: ${props => (props.withError ? "2px solid #f00" : 0)};
    }

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #3c33b5;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;

        &:hover {
            background: #2a2484;
            cursor: pointer;
        }
    }
`;
