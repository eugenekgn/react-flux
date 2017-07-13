const React = require('react');

const Input = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  render: function () {

    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass = $`${wrapperClass} has-error`;
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
                 name={this.props.name}
                 className="form-control"
                 placeholder={this.props.placeholder}
                 ref={this.props.name}
                 value={this.props.value}
                 onChange={this.props.onChange}
          />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  },
});

module.exports = Input;
