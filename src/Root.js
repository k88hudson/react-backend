const React = require("react");

const Root = React.createClass({
  componentDidMount() {
    console.log("MOUNT", window.performance.now());
  },
  render() {
    return (<div>
      {this.props.count} bottles of beer on the wall, {this.props.count} bottles of beer...
    </div>);
  }
});

module.exports = Root;
