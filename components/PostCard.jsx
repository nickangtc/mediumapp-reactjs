const PostCard = React.createClass({
  render: function () {
    return (
      <div id={this.props.id} className="row margin-bottom">

        <PostHeader data={this.props.data}></PostHeader>
        <PostTitle data={this.props.data}></PostTitle>
        <PostPicture data={this.props.data}></PostPicture>
        <PostContent data={this.props.data}></PostContent>
        <PostSocial data={this.props.data}></PostSocial>

      </div>
    );
  }
});
