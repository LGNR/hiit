import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import pesos from './pesos.png'
import mxn from './MXN.png'
import igual from './Group5.png'
import * as serviceWorker from './serviceWorker';



/*
class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
*/

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  myChangeHandler = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    var result = '';
    if (this.state.value) {
        var total=parseFloat(this.state.value)+2499;
        var showIt=total;
      result = showIt.toLocaleString('en');
    } else {
      result = '2,499';
    }
    var style_div = {position: 'absolute', left: '616px', top: '242px', width: '207px', height: '47px'};
    var style_res = {position: 'absolute', left: '921px', top: '242px', width: '500px', height: '60px', fontFamily: 'Arial', fontSize: '36px', color: 'white'};
    var style_input={width: '200px', height: '47px', fontSize: 24};
    return (
      <div>
      <div style={style_res}>
        <img src={pesos}></img>{result} <img src={mxn}></img>
      </div>

			<div style={style_div}>
        <form>
        <input style={style_input}
        type='number'
        onChange={this.myChangeHandler}
        />
       </form>
      </div>  
      </div>
      
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


class MyFormMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  myChangeHandler = (event) => {
    this.setState({value: event.target.value});
  }
  render() {
    var result = '';
    if (this.state.value) {
        var total=parseFloat(this.state.value)+2499;
        var showIt=total;
      result = showIt.toLocaleString('en');
    } else {
      result = '2,499';
    }
    //var style_div = {width: '207px', height: '50px'};
    var style_res = {width: '500px', height: '60px', fontFamily: 'Arial', fontSize: '36px', color: 'white'};
    var style_input={width: '200px', height: '50px', fontSize: 24};
    return (
      <div>
       <div>
        <form>
        <input style={style_input}
        type='number'
        onChange={this.myChangeHandler}
        />
       </form>
      </div> 
      <div>
        <img src={igual}></img>
      </div>
      <div style={style_res}>
        <img src={pesos}></img>{result} <img src={mxn}></img>
      </div>

		 
      </div>
      
      
    );
  }
}
ReactDOM.render(<MyFormMobile />, document.getElementById('root2'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


class MyFormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Gracias por enviar su correo y comentarios, " + this.state.name);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  render() {
    var ta_style={height: '200px'}
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hola, {this.state.name} {this.state.age}</h1>
      <p>Nombre:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      <p>Correo electrónico:</p>
      <input
        type='text'
        name='email'
      />
       <p>Comentario:</p>
      <input style={ta_style}
        type='textarea'
        name='comment'
      />
      <p> </p>
      <input
        type='submit'
      />
      <p></p>
      </form>
    );
  }
}

ReactDOM.render(<MyFormData />, document.getElementById('root3'));

class MyFormDataMob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Gracias por enviar su correo y comentarios, " + this.state.name);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  render() {
    var ta_style={height: '100px'}
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hola, {this.state.name} {this.state.age}</h1>
      <p>Nombre:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      <p>Correo electrónico:</p>
      <input
        type='text'
        name='email'
      />
       <p>Comentario:</p>
      <input style={ta_style}
        type='textarea'
        name='comment'
      />
      <p> </p>
      <input
        type='submit'
      />
      <p></p>
      </form>
    );
  }
}

ReactDOM.render(<MyFormDataMob />, document.getElementById('root4'));