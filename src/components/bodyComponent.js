import React, { Component } from 'react';
import axios from 'axios';
import {Pagination as PaginationComponent} from './paginationComponent.js';
import {Modal as ModalComponent} from './main/modalComponent.js';
// import {Row, Col, Grid, Clearfix} from 'react-bootstrap';
import './../css/bootstrap/bootstrap.css';
import './../css/index.css';

const API_KEY = 'ebea8cfca72fdff8d2624ad7bbf78e4c';

class Body extends Component {

  constructor (props) {
    super(props);
    let urlSearch = new URLSearchParams(window.location.search);
    this.state = {
      response: [],
      page:urlSearch.get('page'),
      item:undefined
    }
  }

  componentDidMount () {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${this.state.page}`).then((res)=>{
      console.log(res.data);
      this.setState({response:res.data.results, totalPages: res.data.total_pages});
    });
  }

  handleClick (event) {
    this.setState({item:+event.target.id});
  }

  backToView () {
    this.setState({item:undefined});
  }

  nextMovie () {
    (this.state.item === 19)? this.setState({item:0}) : this.setState({item:this.state.item+1});
  }

  render () {
    let bodyPart = (this.state.item !== undefined)?
      (
        <div>
          <div className="backgroundImage" style={{backgroundImage: `url('http://image.tmdb.org/t/p/w342/${this.state.response[this.state.item].poster_path}'`}}></div>
          <div className="modalNavigation">
            <p onClick = {this.backToView.bind(this)}>back</p>
            <p onClick = {this.nextMovie.bind(this)}>next</p>
          </div>
          <div className="container-fluid modalContainer">
            <div className="row modalRow">
              <img className="modalPoster" alt="movie poster" data-toggle="tooltip" title={`${this.state.response[this.state.item].title}`} src={`http://image.tmdb.org/t/p/w342/${this.state.response[this.state.item].poster_path}`} />
              <p>{this.state.response[this.state.item].title}</p>
              <p>Rating: {this.state.response[this.state.item].vote_average}</p>
            </div>
          </div>
        </div>
      ) : (
      <div className="container-fluid mainContainer">
        <div className="row justify-content-center">
          {this.state.response.map((item, index)=>{
            return (
              <div className = "col-6 col-sm-4 col-md-2 imgWrapper" key={index} onClick={this.handleClick.bind(this)}>
                <img className="moviePoster" id={index} alt="movie poster" data-toggle="tooltip" title={`${item.title}`}
                src={`http://image.tmdb.org/t/p/w342/${item.poster_path}`} />
              </div>
              );
          })}
        </div>
        <PaginationComponent page={this.state.page} totalPages={this.state.totalPages}/>
      </div>
    )

    return (
      <div className="main">
        {bodyPart}
      </div>
    );
  }
}

export { Body };
