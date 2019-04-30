import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import firebase from 'firebase';
import 'firebase/auth';
import { getWalks } from '../../helpers/RestApiClient';
import Card from '../Card';
import { colourList } from '../../lib/colourList';

class Recent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      walks: []
    }
  }
  componentDidMount() {
    getWalks()
      .then(res => this.setState({
        isLoading: false,
        walks: res
      }))
      .catch(err => console.log(err));
  }
  render() {
    const { walks, isLoading } = this.state;
    if (isLoading) {
      return <div style={{ padding: '1.5rem 1rem' }}><Skeleton /></div>
    }
    return (
      <div className="card__wrap">
        {walks.map((walk, i) => {
          let walkData = walk.data;
          return (
            <Link to={`/walk/${walk.id}`}>
              <Card key={walk.id} colour={colourList[Math.floor(Math.random() * colourList.length)]} name={walkData.name} />
            </Link>
          )
        })}
      </div>
    );
  }
}

export default Recent;