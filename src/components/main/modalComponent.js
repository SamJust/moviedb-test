import React from 'react';

class Modal extends React.Component {
  render () {
    return (
      <div>
        <div className="backgroundImage" style={{backgroundImage: `url('http://image.tmdb.org/t/p/w342/${this.state.response[this.state.item].poster_path}'`}}></div>
        <div className="container-fluid modalContainer">
          <div className="row modalRow">
            <img className="modalPoster" alt="movie poster" data-toggle="tooltip" title={`${this.state.response[this.state.item].title}`} src={`http://image.tmdb.org/t/p/w342/${this.state.response[this.state.item].poster_path}`} />
            <p>{this.state.response[this.state.item].title}</p>
            <p>Rating: {this.state.response[this.state.item].vote_average}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
