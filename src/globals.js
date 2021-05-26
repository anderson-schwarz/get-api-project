import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&family=Open+Sans&display=swap');

  ::-webkit-scrollbar{
    width: 5px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 4px;
    background-color: #333;
  }

  * {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    color:#1D1D1B;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: 16px 'Roboto';
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6, input, button{
    font-family: 'Roboto', sans-serif;
  }

  hr{
    border: none;
    border-top: 1px solid #999;
  }

  // estilos complementares do BS4
  body{
    .text-right{
      text-align: right;
    }
    .p-relative{
      position: relative;
    }

    .p-absolute{
      position: absolute;
    }

    .h1, .h2, .h3, .h4, .h5, .h6,
    .h1-sm, .h2-sm, .h3-sm, .h4-sm, .h5-sm, .h6-sm,
    .h1-md, .h2-md, .h3-md, .h4-md, .h5-md, .h6-md,
    .h1-lg, .h2-lg, .h3-lg, .h4-lg, .h5-lg, .h6-lg,
    .h1-xl, .h2-xl, .h3-xl, .h4-xl, .h5-xl, .h6-xl,
    .h1-xxl, .h2-xxl, .h3-xxl, .h4-xxl, .h5-xxl, .h6-xxl {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .display-1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-2 {
      font-size: 5.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-3 {
      font-size: 4.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .display-4 {
      font-size: 3.5rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .h1 {
      font-size: 2.5rem;
    }

    .h2 {
      font-size: 2rem;
    }

    .h3 {
      font-size: 1.75rem;
    }

    .h4 {
      font-size: 1.5rem;
    }

    .h5 {
      font-size: 1.25rem;
    }

    .h6 {
      font-size: 1rem;
    }

    .w-25 {
      width: 25% !important;
    }

    .w-50 {
      width: 50% !important;
    }

    .w-75 {
      width: 75% !important;
    }

    .w-100 {
      width: 100% !important;
    }

    .w-auto {
      width: auto !important;
    }

    .h-25 {
      height: 25% !important;
    }

    .h-50 {
      height: 50% !important;
    }

    .h-75 {
      height: 75% !important;
    }

    .h-100 {
      height: 100% !important;
    }

    .h-auto {
      height: auto !important;
    }

    .mw-100 {
      max-width: 100% !important;
    }

    .mh-100 {
      max-height: 100% !important;
    }

    .min-vw-100 {
      min-width: 100vw !important;
    }

    .min-vh-100 {
      min-height: 100vh !important;
    }

    .vw-100 {
      width: 100vw !important;
    }

    .vh-100 {
      height: 100vh !important;
    }

    .small {
      font-size: 90%;
      font-weight: 400;
    }

    .normal{
      font-size: 100%;
    }

    .big{
      font-size: 120%;
    }

    @media screen and (min-width: 576px){
      .p-sm-relative{
        position: relative;
      }

      .p-sm-absolute{
        position: absolute;
      }

      .display-sm-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-sm-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-sm {
        font-size: 2.5rem;
      }

      .h2-sm {
        font-size: 2rem;
      }

      .h3-sm {
        font-size: 1.75rem;
      }

      .h4-sm {
        font-size: 1.5rem;
      }

      .h6-sm {
        font-size: 1.25rem;
      }

      .h6-sm {
        font-size: 1rem;
      }

      .w-sm-25 {
        width: 25% !important;
      }

      .w-sm-50 {
        width: 50% !important;
      }

      .w-sm-75 {
        width: 75% !important;
      }

      .w-sm-100 {
        width: 100% !important;
      }

      .w-sm-auto {
        width: auto !important;
      }

      .h-sm-25 {
        height: 25% !important;
      }

      .h-sm-50 {
        height: 50% !important;
      }

      .h-sm-75 {
        height: 75% !important;
      }

      .h-sm-100 {
        height: 100% !important;
      }

      .h-sm-auto {
        height: auto !important;
      }

      .mw-sm-100 {
        max-width: 100% !important;
      }

      .mh-sm-100 {
        max-height: 100% !important;
      }

      .min-vw-sm-100 {
        min-width: 100vw !important;
      }

      .min-vh-sm-100 {
        min-height: 100vh !important;
      }

      .vw-sm-100 {
        width: 100vw !important;
      }

      .vh-sm-100 {
        height: 100vh !important;
      }

      .small-sm {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-sm {
        font-size: 100%;
      }

      .big-sm {
        font-size: 120%;
      }
    }

    @media screen and (min-width: 768px){
      .mobile-only{
        display: none;
      }

      .desk-only{
        display: block;
      }

      .p-md-relative{
        position: relative;
      }

      .p-md-absolute{
        position: absolute;
      }

      .display-md-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-md-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-md {
        font-size: 2.5rem;
      }

      .h2-md {
        font-size: 2rem;
      }

      .h3-md {
        font-size: 1.75rem;
      }

      .h4-md {
        font-size: 1.5rem;
      }

      .h5-md {
        font-size: 1.25rem;
      }

      .h6-md {
        font-size: 1rem;
      }

      .w-md-25 {
        width: 25% !important;
      }

      .w-md-50 {
        width: 50% !important;
      }

      .w-md-75 {
        width: 75% !important;
      }

      .w-md-100 {
        width: 100% !important;
      }

      .w-md-auto {
        width: auto !important;
      }

      .h-md-25 {
        height: 25% !important;
      }

      .h-md-50 {
        height: 50% !important;
      }

      .h-md-75 {
        height: 75% !important;
      }

      .h-md-100 {
        height: 100% !important;
      }

      .h-md-auto {
        height: auto !important;
      }

      .mw-md-100 {
        max-width: 100% !important;
      }

      .mh-md-100 {
        max-height: 100% !important;
      }

      .min-vw-md-100 {
        min-width: 100vw !important;
      }

      .min-vh-md-100 {
        min-height: 100vh !important;
      }

      .vw-md-100 {
        width: 100vw !important;
      }

      .vh-md-100 {
        height: 100vh !important;
      }

      .small-md {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-md {
        font-size: 100%;
      }

      .big-md {
        font-size: 120%;
      }
    }

    @media screen and (min-width: 992px){
      .p-lg-relative{
        position: relative;
      }

      .p-lg-absolute{
        position: absolute;
      }

      .display-lg-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-lg-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-lg {
        font-size: 2.5rem;
      }

      .h2-lg {
        font-size: 2rem;
      }

      .h3-lg {
        font-size: 1.75rem;
      }

      .h4-lg {
        font-size: 1.5rem;
      }

      .h5-lg {
        font-size: 1.25rem;
      }

      .h6-lg {
        font-size: 1rem;
      }

      .w-lg-25 {
        width: 25% !important;
      }

      .w-lg-50 {
        width: 50% !important;
      }

      .w-lg-75 {
        width: 75% !important;
      }

      .w-lg-100 {
        width: 100% !important;
      }

      .w-lg-auto {
        width: auto !important;
      }

      .h-lg-25 {
        height: 25% !important;
      }

      .h-lg-50 {
        height: 50% !important;
      }

      .h-lg-75 {
        height: 75% !important;
      }

      .h-lg-100 {
        height: 100% !important;
      }

      .h-lg-auto {
        height: auto !important;
      }

      .mw-lg-100 {
        max-width: 100% !important;
      }

      .mh-lg-100 {
        max-height: 100% !important;
      }

      .min-vw-lg-100 {
        min-width: 100vw !important;
      }

      .min-vh-lg-100 {
        min-height: 100vh !important;
      }

      .vw-lg-100 {
        width: 100vw !important;
      }

      .vh-lg-100 {
        height: 100vh !important;
      }

      .small-lg {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-lg {
        font-size: 100%;
      }

      .big-lg {
        font-size: 120%;
      }
    }

    @media screen and (min-width: 1200px){
      .p-xl-relative{
        position: relative;
      }

      .p-xl-absolute{
        position: absolute;
      }

      .display-xl-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xl-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-xl {
        font-size: 2.5rem;
      }

      .h2-xl {
        font-size: 2rem;
      }

      .h3-xl {
        font-size: 1.75rem;
      }

      .h4-xl {
        font-size: 1.5rem;
      }

      .h5-xl {
        font-size: 1.25rem;
      }

      .h6-xl {
        font-size: 1rem;
      }

      .w-xl-25 {
        width: 25% !important;
      }

      .w-xl-50 {
        width: 50% !important;
      }

      .w-xl-75 {
        width: 75% !important;
      }

      .w-xl-100 {
        width: 100% !important;
      }

      .w-xl-auto {
        width: auto !important;
      }

      .h-xl-25 {
        height: 25% !important;
      }

      .h-xl-50 {
        height: 50% !important;
      }

      .h-xl-75 {
        height: 75% !important;
      }

      .h-xl-100 {
        height: 100% !important;
      }

      .h-xl-auto {
        height: auto !important;
      }

      .mw-xl-100 {
        max-width: 100% !important;
      }

      .mh-xl-100 {
        max-height: 100% !important;
      }

      .min-vw-xl-100 {
        min-width: 100vw !important;
      }

      .min-vh-xl-100 {
        min-height: 100vh !important;
      }

      .vw-xl-100 {
        width: 100vw !important;
      }

      .vh-xl-100 {
        height: 100vh !important;
      }

      .small-xl {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-xl {
        font-size: 100%;
      }

      .big-xl {
        font-size: 120%;
      }
    }

    @media screen and (min-width: 1400px){
      .p-xxl-relative{
        position: relative;
      }

      .p-xxl-absolute{
        position: absolute;
      }

      .display-xxl-1 {
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-2 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-3 {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .display-xxl-4 {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .h1-xxl {
        font-size: 2.5rem;
      }

      .h2-xxl {
        font-size: 2rem;
      }

      .h3-xxl {
        font-size: 1.75rem;
      }

      .h4-xxl {
        font-size: 1.5rem;
      }

      .h5-xxl {
        font-size: 1.25rem;
      }

      .h6-xxl {
        font-size: 1rem;
      }

      .w-xxl-25 {
        width: 25% !important;
      }

      .w-xxl-50 {
        width: 50% !important;
      }

      .w-xxl-75 {
        width: 75% !important;
      }

      .w-xxl-100 {
        width: 100% !important;
      }

      .w-xxl-auto {
        width: auto !important;
      }

      .h-xxl-25 {
        height: 25% !important;
      }

      .h-xxl-50 {
        height: 50% !important;
      }

      .h-xxl-75 {
        height: 75% !important;
      }

      .h-xxl-100 {
        height: 100% !important;
      }

      .h-xxl-auto {
        height: auto !important;
      }

      .mw-xxl-100 {
        max-width: 100% !important;
      }

      .mh-xxl-100 {
        max-height: 100% !important;
      }

      .min-vw-xxl-100 {
        min-width: 100vw !important;
      }

      .min-vh-xxl-100 {
        min-height: 100vh !important;
      }

      .vw-xxl-100 {
        width: 100vw !important;
      }

      .vh-xxl-100 {
        height: 100vh !important;
      }

      .small-xxl {
        font-size: 80%;
        font-weight: 400;
      }

      .normal-xxl {
        font-size: 100%;
      }

      .big-xxl {
        font-size: 120%;
      }
    }
  }
`;
