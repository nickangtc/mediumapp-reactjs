const PostPicture = React.createClass({
  render: function () {
    return (
      <div className="col-md-12">
        <img className="pic-main" src={this.props.data['pic-main']}></img>
      </div>
    );
  }
});
