import styled from 'styled-components'

export const FormContainer = styled.div`
    .modal-header{
        text-align:center;
        margin:15px;
    }

    .error-text{
      color: tomato;
      font-size: .8rem;
      padding-top:4px;
    }

    .error-text-contact{
      color: tomato;
      font-size: 1rem;
      text-align: center;
      padding: 5px;
      margin-bottom: 4px;
    }

    .form-control{
    margin-bottom: 10px;
    padding:4px 10px;

    label{
      display: block;
      box-sizing: border-box;
      margin-bottom:2px;
      font-size: 12px;
    }

    input{
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #ccc;
      min-height:38px;
      padding: 2px 8px;
      color: #5c5e76;
      font-size: 14px;
    }

    .select{
      font-size: 14px;
      input{
        min-height: initial;
      }
    }
  }
  
    .button-box{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      margin: 0 auto;
      button{
        margin-bottom:1rem;
      }
    }
`
export const Salir = styled.button`
    background-color: white;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: .5px;
    line-height: 35px;
    color: #333;
    padding: 0 14px;
    border-radius: 5px;
    transition: all .3s;
    cursor: pointer;
    border: 1px solid #fc7b27;
    &:hover{
      background-color: rgba(0,0,0,.1error-text);
    }
`