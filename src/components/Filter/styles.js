import styled from 'styled-components'

export const FilterContainer = styled.div`
  background-color:#fff;
  border-radius:5px;
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.25);
  padding:10px;

  label{
    font-size:14px;
  }

  h3{
    font-size:16px;
  }

  input{
    padding:7px;
    margin:10px 0;
    border-radius:5px;
    border: 1px solid #dedede;
  }

  input[type="text"]{
    width: calc(100% - 60px)
  }

  input[type="radio"]{
    margin-right:8px;
    :checked{
      border-color: #fc7b27;
      box-shadow: 0 2px 4px 0 rgba(252,162,103,.28);
    }
  }
 `
export const AddressContainer = styled.div`
    display:flex;

    .search-button{
      margin-left:.8rem;
      border-radius:5px;
      border: 1px solid #dedede;
      max-height: 29px;
      min-width: 30px;
      margin-top: 11px;
      cursor:pointer;

    }
`