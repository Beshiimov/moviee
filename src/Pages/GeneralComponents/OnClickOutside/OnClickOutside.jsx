import React, { Component } from "react";

class OnclickOutside extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.clickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.clickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  clickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.toDefaultState();
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

export default OnclickOutside;
