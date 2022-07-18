import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #222134;
        --green: #64CC33;

        --green-gradient: linear-gradient(151deg, rgba(0,145,34,1) 0%, rgba(10,187,0,1) 73%);

        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #f0f2f5;
        --shape: #ffffff; 

        --theme: #CE00AD;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //1REM = 16px
    //font size desktop 16px
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;//15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%;//14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    input, textarea, select {
        &:focus {
            outline: var(--theme) solid 1px;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;

        background-color: var(--background);
        padding: 3rem;

        position: relative;
        border-radius: 0.24rem;

        transition: opacity 2000ms ease-in-out;

    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;
        border: 0;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.5);
        }
    }

`;
