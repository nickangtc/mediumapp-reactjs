const PostContent = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },

  render: function () {
    var content;

    if (this.state.expanded) {
      content = this.props.data.content;
    } else if (!this.state.expanded) {
      content = summarise(this.props.data.content);
    }

    function summarise (content) {
      return (content.slice(0, 50)) + '...';
    }

    return (
      <div className="col-md-12">
        {content}
      </div>
    );
  }
});
