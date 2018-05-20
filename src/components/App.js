import React, { Component } from 'react';
import VisibleItem from '../container/VisibleItem';
import VisbleCar from '../container/VisbleCar';
import '../sass/reset.css';
import '../sass/screen.sass';
import { connect } from 'react-redux';
import { defaultData } from '../actions';
import axios from 'axios';


class App extends Component {
  componentDidMount() {
    axios.get('https://tonygu30.github.io/Data_on/shop.json').then((result) => {
      this.props.defaultData(result.data);
    });
  }

  render() {
    return (
      <div className="app">
        <VisibleItem />
        <VisbleCar />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  defaultData(text) {
    dispatch(defaultData(text));
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
