const PostSocial = React.createClass({
  render: function () {
    return (
      <div>
        <div className="col-md-2">
          <span className="glyphicon glyphicon-heart-empty"></span> {this.props.data.likes}
        </div>
        <div className="col-md-offset-6"></div>
        <div className="col-md-4 pull-right text-right">
          {this.props.data['responses-count']} responses
        </div>
      </div>
    );
  }
});
