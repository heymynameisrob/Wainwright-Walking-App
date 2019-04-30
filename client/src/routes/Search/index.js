import React, { Component } from 'react';
import { getWalks } from '../../helpers/RestApiClient';
import SearchBar from '../../components/SearchBar';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      value: '',
      walks: []
    }
  }
  componentDidMount() {
    getWalks()
      .then(res => this.setState({
        isLoading: false,
        walks: res
      }, () => { console.log(this.state.walks) }))
      .catch(err => console.log(err));
  }

  render() {
    const { walks, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div id="search">
        <SearchBar data={walks} />
      </div>
    );
  }
}

export default Search;