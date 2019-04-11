import React, { Component } from 'react'
import api from '../../services/api'

import Logo from '../../components/Logo/logo'
import './style.css';

export class Main extends Component {
  state = {
    newBox: ''
  }

  handleInputChange = (event) => {
    this.setState({ newBox: event.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newBox } = this.state;

    const response = await api.post('boxes', {
      title: newBox
    })

    console.log(response.data)

    this.props.history.push(`/box/${response.data._id}`)
  }

  render() {
    return (
      <div id="main-container">
        <form action="">
          <Logo />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange} />
          <button type="submit" onClick={this.handleSubmit}>Criar</button>
        </form>
      </div>
    )
  }
}

export default Main;
