import styled from '@emotion/styled';

export const MovieContainer = styled.div`
    display: flex;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2a363b;
`;

export const MovieInfo = styled.div`
    margin-left: 20px;
`;

export const MovieAdditionalInfo = styled.ul`
    padding-bottom: 20px;
    border-bottom: 1px solid #2a363b;
`;
export const AdditionalInfoItem = styled.li`
    margin-bottom: 20px;
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