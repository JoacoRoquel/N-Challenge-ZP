import styled from 'styled-components'

export const ModalStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => props.open ? 'block' : 'none'};
  z-index: 999;

  .modal {
    min-width: 350px;
    width: ${props => props.width};
    height: ${props => props.height};
    /*padding: 10px;*/
    background: #fbfbfb;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 8px;
  }
`