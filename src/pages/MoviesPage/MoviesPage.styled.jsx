import styled from '@emotion/styled';

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

    export const FormInput = styled.input`
    height: 30px;
    font-size: 24px;
    padding-left: 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :focus {
        border: 1px solid #2f21f3;
    }
`;

    export const Button = styled.button`
    height: 32px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    background-color: #2f21f3;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 10px;
    :hover,
    :focus {
        background-color: #7068d8;
    }
`;

export const ListItem = styled.li`
    height: 471px;
    cursor: pointer;
    margin: 0;
    border-radius: 5px;
    :hover,
    :focus {
        box-shadow: 0 1px 4px rgba(255, 107, 1, 1), -23px 0 20px -23px rgba(255, 107, 1, 0.8),
        23px 0 20px -23px rgba(255, 107, 1, 0.8), 0 0 40px rgba(255, 107, 1, 0.1) inset;
        transform: scale(1.05);
    }
`;

export const MoviesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`;

