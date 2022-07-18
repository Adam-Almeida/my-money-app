import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background-color: var(--shape);
        padding: 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    }

    div:last-child{
        color: #ffffff;
        background: var(--green-gradient);
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 0.8rem;
        font-size: 2rem;
        font-weight: normal;
        line-height: 3rem;
    }

    @media(max-width: 800px) { 
        grid-template-columns: 1fr;

    }
    
`