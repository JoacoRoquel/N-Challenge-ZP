import styled from 'styled-components'

export const PageContainer = styled.div`
  display:flex;
`
export const Main = styled.div`
  max-width: 1180px;
  padding: 0 10px;
  box-sizing: border-box;
  width:100%;
  margin:0 auto;
  display:block;
`
export const FirstColumn = styled.div`
  width: 302px;
  flex-shrink: 0;
  flex-grow: 0;
  left: 0;

  .operation-type{
    display:flex;
    flex-direction:column;
  }
`
export const SecondColumn = styled.div`
  width: calc(100% - 290px);
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 10px;
  box-sizing: border-box;
`
