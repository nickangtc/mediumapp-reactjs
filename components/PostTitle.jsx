const PostTitle = React.createClass({
  render: function () {
    return (
      <div className="col-md-12">
        <h3>{this.props.data.title}</h3>
      </div>
    );
  }
});
