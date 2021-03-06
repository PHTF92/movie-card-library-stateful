import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.trocarTitle = this.trocarTitle.bind(this);
    this.trocarSubtitle = this.trocarSubtitle.bind(this);
    this.trocarImagePath = this.trocarImagePath.bind(this);
    this.trocarStoryline = this.trocarStoryline.bind(this);
    this.trocarRating = this.trocarRating.bind(this);
    this.trocarGenre = this.trocarGenre.bind(this);
  }

  trocarTitle(event) {
    this.setState({ title: event.target.value });
  }

  trocarSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  trocarImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  trocarStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  trocarRating(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  trocarGenre(event) {
    this.setState({ genre: event.target.value });
  }

  fazerInput(id, name, type, valor, aotrocar) {
    return (
      <input
        id={id}
        name={name}
        type={type}
        value={this.state[valor]}
        onChange={this[aotrocar]}
      />
    );
  }

  fazerSelect() {
    return (
      <select
        id="gen"
        name="genre"
        onChange={this.trocarGenre}
        value={this.state.genre}
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }

  limparEstado(funcaoClicar) {
    const filme = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    funcaoClicar(filme);
  }

  render() {
    const estado = this.state;
    const { onClick } = this.props;
    console.log(estado);
    return (
      <div>
        <h2>Adicione um novo filme!</h2>
        <form className="botton-form">
          <label htmlFor="name">Título</label>
          {this.fazerInput('name', 'title', 'text', 'title', 'trocarTitle')}
          <label htmlFor="sub">Subtítulo</label>
          {this.fazerInput('sub', 'subtitle', 'text', 'subtitle', 'trocarSubtitle')}
          <label htmlFor="img">Imagem</label>
          {this.fazerInput('img', 'imagePath', 'text', 'imagePath', 'trocarImagePath')}
          <label htmlFor="sin">Sinopse</label>
          <textarea
            id="sin" name="storyline" value={estado.storyline}
            onChange={this.trocarStoryline}
          />
          <label htmlFor="av">Avaliação</label>
          {this.fazerInput('av', 'rating', 'number', 'rating', 'trocarRating')}
          <label htmlFor="gen">Gênero</label>
          {this.fazerSelect()}
          <button type="button" onClick={() => this.limparEstado(onClick)}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
