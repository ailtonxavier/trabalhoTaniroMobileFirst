import styled from "styled-components";

export const AreaMain = styled.main`
  display: grid;
  .h2_main{
    font-size:1.4rem;
    padding: 1rem ;
  
  }
  .h2 {
    margin-left:2rem;
    color: red;
    font-size: 2rem;
  }
  .paragrafo {
    text-align: justify;
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .card {
    box-shadow: 0px 0px 5px #aaa;
  }
  .card_aside {
    box-shadow: 0px 0px 5px #aaa;
  }
  @media screen and (max-width: 479px){
    .container{
      width: 87%;
      margin-top:1.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    
    .subcontainer {
        .card {
          margin-top: 2rem;
          width: 100%;
          display: block;
          .image {
            width: 100%;
          }
        }
      }
      #ultimas{
    margin-left:1rem;
    width:100%;

  }
      .aside {
        min-width: 100%;
        .card_aside {
          max-width: 100%;
        }
    }
  } // fim do mobile
  

  @media only screen and (min-width: 992px){
    .container {
    .aside {
      
      .card_aside {
        display: inline-block;
        max-width: 100%;
        margin-left:2rem;
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
          /* float: left; */
        }
      }
    }
  }
    .container {
      width: 96%;
      margin-top: 3rem;
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
          .h2 {
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
      }
    }
  
  } // desktop

  

    @media screen and (max-width: 991px){
    .subcontainer {
      padding-top: 0%;
      width: 96%;
      
        .card {
        min-width: 90%;
        margin-left:1.4rem;
        max-width: 100%;
          .h2 {
          text-align: center;
        }
        .image {
          width: 100%;
        }
      }
    }
    .container {
    
      padding-top: 9%;
    .aside {
      
      .card_aside {
        display: inline-block;
        max-width: 90%;
        margin-left:2.5rem;
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
          /* float: left; */
        }
      }
    }
  }
  /*.aside {
      min-width: 90%;
      max-width: 90%;
      padding-left: 3%;
      .card_aside {

        max-width: 96%;
      }
    } */ 
  }  
`;


