/*lifecycle Component */
// import React from 'react';  
// import ReactDOM from 'react-dom';  
   
// class Test extends React.Component {  
//     constructor(props)  
//     {  
//         super(props);  
//         this.state = { hello : "World!" };  
//     }  
   
//     componentWillMount()  
//     {  
//         console.log("componentWillMount()");  
//     }  
   
//     componentDidMount()  
//     {  
//         console.log("componentDidMount()");  
//     }  
   
//     changeState()  
//     {  
//         this.setState({ hello : "Geek!" });  
//     }  
   
//     render()  
//     {  
//         return (  
//             <div>  
//             <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>  
//             <h2>  
//              <a onClick={this.changeState.bind(this)}>Press Here!</a>  
//             </h2>  
//             </div>);  
//     }  
   
//     shouldComponentUpdate(nextProps, nextState)  
//     {  
//         console.log("shouldComponentUpdate()");  
//         return true;  
//     }  
   
//     componentWillUpdate()  
//     {  
//         console.log("componentWillUpdate()");  
//     }  
   
//     componentDidUpdate()  
//     {  
//         console.log("componentDidUpdate()");  
//     }  
// }   
// ReactDOM.render(  
//     <Test />,  
//     document.getElementById('root')); 

/*HELLO COMPONENT*/
// import ReactDOM from 'react-dom';
// import './component/HelloComponent.css';
// import HelloComponent from './component/HelloComponent';
// ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

/*Login*/
import ReactDOM from 'react-dom';
    import './component/Login.css';
    import Login from './component/Login';
    ReactDOM.render(<Login/>, document.getElementById('root'));








