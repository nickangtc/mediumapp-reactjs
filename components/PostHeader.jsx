const PostHeader = React.createClass({
  render: function () {
    return (
      <div>
        <div className="col-md-1">
          <img src={this.props.data.avatar}></img>
        </div>
        <div className="col-md-11">
          <span>{this.props.data.author} in {this.props.data.publication}</span>
        </div>
      </div>
    );
  }
});
