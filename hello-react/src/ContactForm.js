import React, { Component } from 'react'

export default class ContactForm extends Component {

  state = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className="ContactForm" onSubmit={this.handleSubmit}>
        <p>
          Prénom : <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </p>
        <p>
          Nom : <input name="nom" value={this.state.nom} onChange={this.handleChange} />
        </p>
        <p>
          <button>Ajouter</button>
        </p>
      </form>
    )
  }
}
