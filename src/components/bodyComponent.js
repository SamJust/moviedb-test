import React, { Component } from 'react';
import axios from 'axios';
import {Modal as ModalComponent} from './main/modalComponent.js';
import {Grid as GridComponent} from './main/gridComponent.js';
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
          <div className="modalNavigation">
            <p onClick = {this.backToView.bind(this)}>back</p>
            <p onClick = {this.nextMovie.bind(this)}>next</p>
          </div>
          <ModalComponent movie={this.state.response[this.state.item]} />
        </div>
      ) : (
        <GridComponent response={this.state.response} handleClick={this.handleClick.bind(this)} page={this.state.page} totalPages={this.state.totalPages}/>
    )

    return (
      <div className="main">
        {bodyPart}
      </div>
    );
  }
}

export { Body };
