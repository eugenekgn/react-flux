$ = jQuery = require('jquery');

const React = require('react');
const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');

const App = React.createClass({
  render: function () {
    let Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <Child/>
      </div>
    );
  }
});


function render() {
  const htmlRoot = document.getElementById('app');
  const route = window.location.hash.substr(1);
  React.render(<App route={route}/>, htmlRoot);
}

// event that occurs when there's hash change in the url
window.addEventListener('hashchange', render);
render();
