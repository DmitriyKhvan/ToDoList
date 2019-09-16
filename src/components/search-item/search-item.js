import React, {Component} from 'react';
import './search-item.css';

export default class SearchItem extends Component {

  state = {
    term: ''
  }

  findItems = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchItem(term);
  }

  render() {
    return(
      <input className="form-control search-panel" 
            type="text" 
            placeholder="Search Item" 
            value = {this.state.term}
            onChange = {this.findItems}/>
    );
  };
};
