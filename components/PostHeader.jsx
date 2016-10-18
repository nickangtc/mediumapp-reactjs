const PostHeader = React.createClass({
  render: function () {
    return (
      <div>
        <div className="col-md-1">
          <img src={this.props.data.avatar}></img>
        </div>
        <div className="col-md-11">
          <span><a>{this.props.data.author}</a> in <a>{this.props.data.publication}</a></span>
        </div>
      </div>
    );
  }
});
