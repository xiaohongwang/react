import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import HomePage, {Hot,Column} from './modal/route';
// import NewsClicks from './modal/CountClickModal'
// import { Button} from 'antd';
// let a = 2;
// a =3;
// let b = "Hello world";
// const c = 2;

// const d = {id:1,  
//             name:"xiaohong"};
// const {id,name} = d;

// let obj = [1,2,3,4];

// let list = [
//   {first:11,second:12},
//   {first:21,second:22},
//   {first:31,second:32}
// ];

// let str = 'sssfsf\\""';
// let str1 = `<div id = ""> str </div>`;

// export const add = (a) =>{
//   return a+1;
// }
// let title = "弹出层测试";
// let clicksShow = true;
// let data = "恭喜您.嘿嘿！";
// const handleClicksCancel = () =>{
//   data = "关闭";
// }




class App extends Component {
  render() {
   
    return (
      <div className="App">


          {/* <NewsClicks
              title={title}
              visible={clicksShow}
              data={data}
              handleModalCancel={this.handleClicksCancel}
          /> */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
       {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      
       <Router>
        <div>
          <ul>
            <li><Link to="/">主页</Link></li>
            <li><Link to="/hot">热门</Link></li>
            <li><Link to="/zhuanlan">专栏</Link></li>
          </ul>
          <hr/>
          <Route  exact path="/" component={HomePage}></Route>
          <Route path="/hot" component={Hot} ></Route>
          <Route path="/zhuanlan" component={Column}></Route>
        </div>
       </Router>





      
       {/* <p>{a}, {b}, {c}， {id}, {name},{d.id},{d.name}</p>  */}

       {/* <ul>{
          obj.map(
            function(item){
              return <li> {item} </li>
            }
          )
        } </ul> */}



         {/* <p>{list.map(function(map){
            const {first,second} = map;
            return <div>{first}</div>
         })}</p> */}

         {/* <p>{str}</p>
         <p>{str1}</p>
         <p>{add(1)}</p> */}

       
      </div>

  
    );
  }
}

export default App;
