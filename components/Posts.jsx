const Posts = React.createClass({
  render: function () {
    var post1 = {
      avatar: "../imgs/user.png",
      author: "Jonas Ellison",
      publication: "Higher Thoughts",
      title: "There's more going on here",
      'pic-main': "https://cdn-images-1.medium.com/fit/t/720/216/0*U0JLYCdpwpRLPYeh.jpg",
      content: "There almost always is...",
      likes: "46",
      'responses-count': "4"
    };
    var post2 = {
      avatar: "../imgs/user.png",
      author: "Elysium Tan",
      publication: "Daily Elixir",
      title: "Power to the people, Trump doesn't say",
      'pic-main': "https://cdn-images-1.medium.com/fit/t/720/216/1*rBqj_fzJXkzWBxWILXLyLQ.jpeg",
      content: "I have a dream, that one day Trump will be...",
      likes: "2301",
      'responses-count': "121"
    };
    return (
      <div>
        <PostCard id="post-1" data={post1}></PostCard>
        <PostCard id="post-2" data={post2}></PostCard>
      </div>
    );
  }
});
