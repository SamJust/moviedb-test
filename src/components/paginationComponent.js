import React from 'react';
import './../css/pagination.css';


class Pagination extends React.Component {
  render () {
    let pages = []
      , activePage;
    if(this.props.page === null || +this.props.page === 1){
      activePage = 1;
      for(let i = 1; i <= 3; i++){
        pages.push(i);
      }
    } else {
      let starting = +this.props.page - 1;
      let ending = +this.props.page + 1;
      if(ending > +this.props.totalPages) ending = +this.props.totalPages;
      activePage = this.props.page;
      for(let i = starting; i <= ending; i++){
        pages.push(i);
      }
    }
    return (
      <div className="pagination">
        <a href="/?page=1">&laquo;</a>
        {(activePage !== 1)? <a href={`/?page=${activePage-1}`}>&lt;</a> : false}
        {pages.map((item, index)=>{
          if(item === +activePage) return (<a className = "active" href={`/?page=${item}`} key={index}>{item}</a>);
          else return (<a href={`/?page=${item}`} key={index}>{item}</a>)
        })}
        {(activePage !== this.props.totalPages)?<a href={`/?page=${activePage+1}`}>&gt;</a> : false}
        <a href={`/?page=${this.props.totalPages}`}>&raquo;</a>
      </div>
    )
  }
}

export { Pagination };
