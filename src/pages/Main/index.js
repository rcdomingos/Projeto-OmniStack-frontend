import React, { Component } from 'react';
import api from '../../services/api';


import logo from '../../assets/logo.svg';
import "./styles.css";


export default class Main extends Component {
  // tudo que o componente precisa alterar
  state = {
    newBox: ''
  };
  //acionar quando apertar o botão do form
  handleSubmit = async e => { 
    e.preventDefault();//inpedir o evento padrão de carregar a pagina do form
    //console.log(this.state.newBox);

    //enviar a requisão com o nome da box que o usuario digitar
    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    // console.log(response.data);
    // direcionar para tela do id do usuario
    this.props.history.push(`/box/${response.data._id}`);
  };

  //informações que serão alteradas dentro do stado
  handleInputChange = e => {
    this.setState({newBox: e.target.value});
  };

  render() {
    return(
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          {/* variavel javascript { } */}
          <img src={logo} alt=""/> 
          <input 
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}          
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
