import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, asyncEvent } from './redux_demo';
import { inc, dec, cancel_inc } from './redux_action';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      num: 0
    };

    this.add = this.add.bind(this);
    this.asyncEvt = this.delayAdd.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      num: Number(this.myRef.current.value)
    });
  }

  resetState() {
    this.setState({ num: 0 });
  }

  add(num) {
    this.resetState();
    this.props.add(num);
  }

  delayAdd(num) {
    this.resetState();
    this.props.asyncEvent(num);
  }

  render() {
    const { inc, dec, cancel } = this.props;
    return (
      <h1>
        <span>Counter:</span>
        <b><i>{this.props.counter || 0}</i></b>
        <div>
          <input ref={this.myRef} onChange={this.handleChange} type="number" value={this.state.num} />
          <button onClick={() => this.add(this.state.num)}>add</button>
          <button onClick={() => this.delayAdd(this.state.num)}>async</button>
        </div>
        <div>
          <button onClick={inc}>INC</button>
          <button onClick={dec}>DEC</button>
          <button onClick={cancel}>CANCAL INC</button>
        </div>
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  add: (num) => {
    dispatch(add(num));
  },
  asyncEvent: (num) => {
    dispatch(asyncEvent(num));
  },
  inc: () => dispatch(inc()),
  dec: () => dispatch(dec()),
  cancel: () => dispatch(cancel_inc())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
