import React from 'react';
import './../css/navigation.css';
import './../css/bootstrap/bootstrap.css'

class Navigation extends React.Component {

  state = {
    clicked: false
  }

  handleClick () {
    if(this.state.clicked){
      let element = document.getElementsByClassName('glyphicon-chevron-up')[0];
      element.className = "glyphicon glyphicon-chevron-down";
      this.setState({clicked:false});
    }
    else{
      let element = document.getElementsByClassName('glyphicon-chevron-down')[0];
      element.className = "glyphicon glyphicon-chevron-up";
      this.setState({clicked:true});
    }
  }

  render () {
    return (
      <div className = "navigationBar">
        <div>
          <img className = "logo" alt="logo" src="/globe-icon.png" />
           Movies
        </div>
        <div className="myAccount" onClick = {this.handleClick.bind(this)}>
          <span className="d-none d-sm-block accountSpan">My Acccount</span>
          <i className = "glyphicon glyphicon-chevron-down"></i>
        </div>
      </div>
    )
  }
}

export { Navigation }
