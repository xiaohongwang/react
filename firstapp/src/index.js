import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App ,{add}from './App';
import registerServiceWorker from './registerServiceWorker';
import MyComPonent1 from './modal/MyComponent1';
import MyComPonent3 from './modal/Mycomponent3';
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MyComPonent3 />, document.getElementById('root'));
registerServiceWorker();



// 函数组件在文件中
// const MyComPonent = () =>(
//     <div>
//         <h1>这是我的第一个函数组件!</h1>
//     </div>
// )
// ReactDOM.render(<MyComPonent/> ,document.getElementById('root'));



// 函数组件与文件分离
// import MyComPonent from './modal/MyComponent';
// ReactDOM.render(<MyComPonent/> ,document.getElementById('root'));


// 类组件与文件分离
// ReactDOM.render(<MyComPonent1 name="小红"/>, document.getElementById('root'));