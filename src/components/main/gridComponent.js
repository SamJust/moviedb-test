import React from 'react';
import {Pagination as PaginationComponent} from './../paginationComponent.js';

class Grid extends React.Component {

  handleClick (event) {
    this.props.handleClick(event);
  }

  render () {
    return (
      <div className="container-fluid mainContainer">
        <div className="row justify-content-center">
          {this.props.response.map((item, index)=>{
            return (
              <div className = "col-6 col-sm-4 col-md-2 imgWrapper" key={index}>
                <img className="moviePoster" id={index} alt="movie poster" data-toggle="tooltip" title={`${item.title}`} onClick={this.handleClick.bind(this)}
                src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`} />
              </div>
              );
          })}
        </div>
        <PaginationComponent page={this.props.page} totalPages={this.props.totalPages}/>
      </div>
    );
  }
}

export { Grid };
