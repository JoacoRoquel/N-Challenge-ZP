import styled, { css } from 'styled-components'

export const StyledPostingCard = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  margin-bottom: 10px;
  overflow:hidden;
  border-radius: 5px;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.33);
  position: relative;
  ${props => props.publicType === 'Destacado' ?
   css`border-top:3px solid #31d1a1;`:
    props.publicType === 'Super Destacado' &&
     css`border-top:3px solid #9371e0;`}
`
export const CardContainer = styled.div`
  display:flex;
`
export const FirstColumn = styled.div`
${props => props.publicType === 'Super Destacado' ?
    css`width:360px;` :
    css`width:320px;`}
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;

  .container-image{
    height:180px;
    position:relative;
    .picture{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  .container-price{
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    padding: 8px 14px;
    box-sizing: border-box;
    position: relative;
  }

  .price{
    font-size:22px;
  }

  .expenses{
    display: block;
    font-size: 14px;
    font-weight: 350;
    color: #4d4d4d;
    margin-top: 4px;
    margin-left: 2px;
  }

  .public-type{
    position: absolute;
    left: 14px;
    top: 14px;
    z-index: 2;
    color: #fff;
    font-size: 14px;
    text-shadow: 0 2px 4px rgba(0,0,0,.7)
  }

  .like{
    margin-top:6px;
  }

  .like-icon{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    padding: 0;
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
  }
`
export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;

  .info{
    display:block;
    height:180px;
    padding:4px 5px 5px 10px;
    box-sizing: border-box;
  }

  .header{
    display: flex;
    justify-content: space-between;
    flex-direction:column;
  }

  .title{
    color:#1ea7dd;
    margin:6px 0;
    font-size:15px;
    font-weight:400;
  }

  .address{
    width: 100%;
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
    color: #333;
    line-height: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .description{
    font-size: 12px;
    line-height: 1.38;
    color: #848484;
    margin-top: 8px;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contact-info{
    display: flex;
    align-items: center;
    justify-content: left;
    height: 59px;
    margin-top: auto;
    padding: 6px 14px 8px;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .diff-days{
    flex-grow: 1;
    flex-shrink: 1;
    font-size:13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    padding-right: 20px;
    box-sizing: border-box;
    svg{
      margin-right:5px;
    }
  }

  .reserved{
    flex-grow:1;
    }
`