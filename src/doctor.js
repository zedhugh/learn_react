import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, addShowList } from './doctorAction';

class Doctor extends Component {
  constructor(props) {
    super(props);

    this.addList = this.addList.bind(this);
    this.fetchdata = this.fetchdata.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { id: '' };
  }

  addList() {
    this.resetState();
    const { id } = this.state;
    this.props.add(id);
  }

  resetState() {
    this.setState({ id: '' });
  }

  fetchdata() {
    this.resetState();
    const { id } = this.state;
    this.props.fetch(id);
  }

  handleChange(e) {
    this.setState({
      id: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.id} />
        <button onClick={this.addList}>add show list</button>
        <button onClick={this.fetchdata}>fetch detail</button>
      </div>
    );
  }
}

const mapStore2Props = (store) => {
  console.log(store);
  return;
};

const mapDispatch2Props = (dispatch) => ({
  add: (id) => dispatch(addShowList(id)),
  fetch: (id) => dispatch(fetchDetail(id))
});

export default connect(mapStore2Props, mapDispatch2Props)(Doctor);
