import style from 'styled-components'


export default style.div `
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b5eaea;
  .loginCont {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    padding: 20px ;
    padding-top:50px;
    border-radius: 20px ;
    background-color: #86b0dc;
    transition: all .3s ease;
    box-shadow: 0px 0px 10px 1px #75507582;
    &:hover {
      box-shadow: 2px 2px 10px 5px #75507582;
      // box-shadow: 2px 2px #75507582, -2px -2px red;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
    }
    .formCont {
      margin-top: 50px;
    }

  }


`