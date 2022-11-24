import styled from "styled-components";

export const AreaHeader = styled.header`
  padding-top:0;
  height: 12rem;
  color: white;
  background-color:#1E4C9A;  
  font-family: 'arial';
  *{
  margin-top: 0rem;
  margin:0rem;
    }
  .h1 {
    padding-top: 2.4rem;
   padding-left: 0rem;
   margin-right:0rem;
    font-size: 3rem;
    display:inline;
    width:80%;
    justify-content: center;
  }
  .ListaLinks{
    display:flex;
    height:3rem;
    padding: 0rem 1rem;
    background-color:white;
    border:solid 2px;
    box-shadow: 9px 7px 10px 2px silver;
    
  }
  .links{
    color:gray;
    padding: 0.8rem 0.8rem;
    display:flex;
  }
  .links:hover{ 
   color:black;
    cursor:pointer;
  }
 .ajusteMenu{
    margin-left:1rem; 
  flex:1;
  display:flex;
  padding:0;
 }
 .menu{
 width:2rem;
 padding: 3rem 0rem;
}
.menu:hover{
    cursor:pointer;
}
.nomeMenu{
  
  font-family: 'arial';
  padding: 3.5rem 0.1rem;
  margin-right:1rem;
}
.IconesDireita{
  max-width: 100px;
  margin-right:4rem;
  display:inline-flex;
}
.entrar{
 margin-top:0.5rem;
 font-family: 'arial';
 margin-left:1rem 
 }

.ListaLogos{
  background-color:aliceblue;
  display:flex;
}
.logos{
  padding: 0.3rem 0.7rem;
  display:flex;
}
.logos:hover{
  opacity:0.2;
  cursor:pointer;
}
.lupa{
  width:2px;
  height:2px;
}
.confia {
  padding-top: 0.5rem;
  font-size: 1.2rem;
}

.politica, .ultimas, .eleicoes {
  text-decoration: none;
}

@media screen and (max-width: 479px){
  .h1{
  padding-top: 2.4rem;
   padding-left: 1rem;
   margin-right:0rem;
    font-size: 2rem;
    display:inline;
    width:100%;
    justify-content: center;
 }
  .IconesDireita{
    
  max-width: 0px;
  margin-right:0rem;
  }
  .nomeMenu{
  color:#1E4C9A;
  padding: 0rem;
  margin-right:0rem;
}
.menu{
  width:3rem;
  padding: 3rem 0rem;
  }
  

}
`;
