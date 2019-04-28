import style from 'styled-components'



export const WrapRoot = style.div `
  height:100%;
  background-color: gold;
  .content {
    height:100%;
    background-color: #e8e8e8;
    .sider {
      background-color: transparent;
    }
    .innerHeader {
      background-color: #ccc;
      font-size: 24px;
    }
  }

`