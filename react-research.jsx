
class MySpan extends React.Component {
  render() {
    return <span>{this.props.text}</span>;
  }
}

class HelloMessage extends React.Component {
  render() {
    return <div>Hello <MySpan text={this.props.name}/></div>;
  }
}


if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<HelloMessage name="Sebastian" />,
                 document.getElementById('container1'));
  });
}
