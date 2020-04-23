import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDetail, addShowList } from './doctorAction';

class Doctor extends Component {
  constructor(props) {
    super(props);
    console.log(10, props);

    this.addList = this.addList.bind(this);
    this.fetchdata = this.fetchdata.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { id: '' };
  }

  addList() {
    this.resetState();
    const { id } = this.state;
    this.props.addShowList(id);
  }

  resetState() {
    this.setState({ id: '' });
  }

  fetchdata() {
    this.resetState();
    const { id } = this.state;
    this.props.fetchDetail(id);
  }

  componentWillReceiveProps() {
    console.log(11, this.props.doctor);
  }

  handleChange(e) {
    this.setState({
      id: e.target.value
    });
  }

  render() {
    return (
      <div>
        <span>{Object.keys(this.props.doctor.data).join(" ")}</span>
        <input type="text" onChange={this.handleChange} value={this.state.id} />
        <button onClick={this.addList}>add show list</button>
        <button onClick={this.fetchdata}>fetch detail</button>
      </div>
    );
  }
}

export default connect(a => a, d => bindActionCreators({addShowList, fetchDetail}, d))(Doctor);
