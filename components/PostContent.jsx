const PostContent = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },
  expandContent: function (ev) {
    this.setState({ expanded: true });
    $(ev.target).remove();
  },

  render: function () {
    var content;

    if (this.state.expanded) {
      content = this.props.data.content;
    } else if (!this.state.expanded) {
      content = summarise(this.props.data.content);
    }

    function summarise (content) {
      return (content.slice(0, 150)) + '...';
    }

    return (
      <div>
        <div className="col-md-12">
          {content}
        </div>
        <div id={this.props.data.postid} className="col-md-12">
          <a onClick={ this.expandContent } className="pointerise">
            <small>Read more...</small>
          </a>
        </div>
      </div>

    );
  }
});
