import React from 'react';

class Modal extends React.Component {
  render () {
    return (
      <div>
        <div className="backgroundImage" style={{backgroundImage: `url('http://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}'`}}></div>
        <div className="container-fluid modalContainer">
          <div className="row modalRow">
            <img className="modalPoster" alt="movie poster" data-toggle="tooltip" title={`${this.props.movie.title}`} src={`http://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}`} />
            <p>{this.props.movie.title}</p>
            <p>Rating: {this.props.movie.vote_average}</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
