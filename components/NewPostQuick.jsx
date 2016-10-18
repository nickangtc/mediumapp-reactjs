const NewPostQuick = React.createClass({
  getInitialState: function() {
    return {
      formState: false
    };
  },
  setFormState: function () {
    if (this.state.formState) {
      this.setState({ formState: false });
    } else {
      this.setState({ formState: true });
    }
  },

  render: function () {
    var formHtml;

    if (this.state.formState) {
      formHtml = (
        <div className="panel-body">
          <div className="col-md-1">
            <img src={this.props.data.avatar}></img>
          </div>
          <div className="col-md-11" onBlur={this.setFormState}>
            <textarea rows="8" placeholder="Write here..." className="full-width no-border"></textarea>
          </div>

          <div className="col-md-12">
            <button className="btn btn-default btn-mediumstyle">Publish</button>
            &nbsp; &nbsp;
            <button className="btn btn-default btn-mediumstyle-neutral">Go full screen</button>
          </div>
        </div>
      );
    } else if (!this.state.formState) {
      formHtml = (
        <div className="panel-body">
          <div className="col-md-1">
            <img src={this.props.data.avatar}></img>
          </div>
          <div className="col-md-11" onFocus={this.setFormState}>
            <textarea rows="2" placeholder="Write here..." className="full-width no-border"></textarea>
          </div>
        </div>
      );
    }

    return (
      <div className="panel panel-default">
        <div className="row">
          {formHtml}
        </div>
      </div>

    );
  }
});
