const PostSocial = React.createClass({
  getInitialState: function() {
    return {
      likes: this.props.data.likes,
      responses: this.props.data['responses-count'],
      icon: 'glyphicon glyphicon-heart-empty'
    };
  },
  likePost: function (ev) {
    if (this.state.icon === 'glyphicon glyphicon-heart-empty') {
      this.setState({
        likes: parseInt(this.state.likes) + 1,
        icon: 'glyphicon glyphicon-heart'
      });
    } else {
      this.setState({
        likes: parseInt(this.state.likes) - 1,
        icon: 'glyphicon glyphicon-heart-empty'
      });
    }

  },
  render: function () {
    return (
      <div>
        <div className="col-md-2">
          <a onClick={this.likePost} className="pointerise">
            <span className={ this.state.icon }></span>
          </a>  { this.state.likes }
        </div>
        <div className="col-md-offset-6"></div>
        <div className="col-md-4 pull-right text-right">
          { this.props.data['responses-count'] } responses
        </div>
      </div>
    );
  }
});
