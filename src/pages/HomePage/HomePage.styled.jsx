import styled from '@emotion/styled';

export const MovieItem = styled.li`
padding-bottom: 20px;
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