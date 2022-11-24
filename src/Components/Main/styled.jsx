import styled from "styled-components";

export const AreaMain = styled.main`
  display: grid;
  @media screen and (max-width: 479px){
    .container{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .subcontainer {
        .card {
        margin-top: 1rem;
        width: 100%;
          .image {
            width: 100%;
          }

          .h2 {
            /* color: red; */
            font-size: 2rem;
            padding: .5rem .5rem 0 .5rem;
          }
          .paragrafo {
            font-size: 1.25rem;
            text-align: justify;
            padding: 1rem;
          }


        }
      }
      .aside {
      min-width: 40%;
      max-width: 40%;
      padding-left: 2%;
        .card_aside {
          max-width: 96%;
        }
    }
  }
  

  @media only screen and (min-width: 992px){
    .container {
      width: 96%;
      margin-top: 2rem;
      padding-left: 2%;
      padding-right: 2%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .subcontainer{
        justify-content: space-around;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .card {
          background-color: #fff;
          margin-bottom: auto;
          max-width: calc(49% - 1rem);
          box-shadow: 0px 0px 5px #aaa;
        }
      }
    }
  }
  
  

  .container {
    
   margin-top:3rem;
    


    .subcontainer {
  
      

        .card {
          
          .h2 {
            color: red;
            font-size: 2rem;
            padding: .5rem .5rem 0 .5rem;
          }
          .paragrafo {
            font-size: 1.25rem;
            text-align: justify;
            padding: 1rem;
          }
          .image {
            padding-right: 1rem;
            /* height: 30%; */
            max-width: 70%;
            float: left;
          }
        }
      }
  
    .aside {
      display: inline-block;
      min-width: 20%;
      max-width: 20%;
      .card_aside {
        background-color: #fff;
        display: inline-block;
        max-width: 100%;
        box-shadow: 0px 0px 5px #aaa;
        margin-bottom: 2rem;
        .h2_aside {
          color: red;
          font-size: 2rem;
          text-align: center;
        }
        .paragrafo_aside {
          text-align: justify;
          font-size: 1rem;
          padding: 0 1rem 1rem 1rem;
        }
        .image_aside {
          /* padding-right: 1rem; */
          max-width: 100%;
          float: left;
        }
      }
    }
    
    @media screen and (max-width: 991px){
      
    }
    
    @media screen and (max-width: 767px){
    .subcontainer {
      padding-top: 3%;
      width: 96%;
      
        .card {
        min-width: 90%;
        max-width: 100%;
          .h2 {
          text-align: center;
        }
        .image {
          width: 100%;
        }
      }
    }
    
    .aside {
      min-width: 90%;
      max-width: 90%;
      padding-left: 3%;
      .card_aside {

        max-width: 96%;
      }
    }
  }
}
  
  
  

`;


