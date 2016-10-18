const PostTitle = React.createClass({
  render: function () {
    return (
      <div className="col-md-12">
        {this.props.data.title}
      </div>
    );
  }
});
