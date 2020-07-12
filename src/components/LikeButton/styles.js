import styled from 'styled-components'

export const Like = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
  background-color: #fff;
  z-index: 2;
  font-size: 20px;
  line-height: 22px;
  color: #000;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.3);
  transition: box-shadow .4s,background-color .4s;

  .like{
    margin-top:6px;
  }
`