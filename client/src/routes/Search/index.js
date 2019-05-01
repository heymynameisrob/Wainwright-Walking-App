import React, { Component } from 'react';
import { getWalks } from '../../helpers/RestApiClient';
import SearchBar from '../../components/SearchBar';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      walks: [],
      list: []
    }
  }
  componentDidMount() {
    getWalks()
      .then(res => this.setState({
        isLoading: false,
        walks: res,
        list: []
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
        {Object.keys(walks)
          .filter(key => walks[key].main === true)
          .map((key, index) => {
            return <div key={key}>
              <h1>{walks[key].name}</h1>
              <p>{walks[key].main}</p>
            </div>
          })}
      </div>
    );
  }
}

export default Search;