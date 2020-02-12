import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background: white;
        margin: 0 !important;
        font-family: 'Roboto', sans-serif;
    }
    
    .BrainhubCarousel__arrowLeft {
        background: #4630EB;
        margin-left: 200px;
    }
    
    .BrainhubCarousel__arrowRight {
        background: #4630EB;
        margin-right: 200px;
    }
    
    ::-webkit-scrollbar {
        width: 9px;
    }
    
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
 

    ::-webkit-scrollbar-thumb {
    background: #4630EB; 
    }
      
`