import style from 'styled-components'


export default style.div `
  background: #ccc;
  &>div{
    &>div {
      // background-color: #eff001;
      height: 50px;
      border: 1px dashed #000;
      transition: width .3s ease;
      &:nth-child(odd) {
        background:#7bdcca;
      }
      &:nth-child(even) {
        background:#d3a6e6;
      }
    }
  }

`