import styled from 'styled-components';
import autumn from './images/autumn.jpg';

export const Container = styled.div`
   background-image:url(${autumn});   
   height:100vh; 
   width:100vw;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Board = styled.div`
   display:flex;  
   width:50vw;
   height:60vh;
   background-color:#b0ba8a;
   border: none;  
   border-radius:10px;
   img{
      border-radius:50%;
      width:180px;
      height:240px;      
      margin:2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   }
`;