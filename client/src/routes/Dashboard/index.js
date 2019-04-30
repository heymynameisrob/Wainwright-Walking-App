import React, { Component } from 'react';
import Top from '../../components/Top';
import TopPicks from '../../components/Recent';
import Cutaway from '../../static/Cutaway-Bottom.svg';
import './style.css';

class Dashboard extends Component {
  render() {
    const { avatar, name } = this.props.userData;
    return (
      <div id="dashboard">
        <Top name={name} avatar={avatar} />
        <header className="main-header" style={{ backgroundImage: `url(${Cutaway})` }}>
          <h1>Welcome, {name.split(' ').slice(0, -1).join(' ')}</h1>
          <p>Are you ready for an adventure?</p>
        </header>
        <section>
          <header>
            <h3>Recently added</h3>
            <p>The latest and greatest</p>
          </header>
          <TopPicks />
        </section>
      </div>
    );
  }
}

export default Dashboard;