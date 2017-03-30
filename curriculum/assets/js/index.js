/**
 * Created by ddipa on 28/03/2017.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');



class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Hello from React-Django-Heroku'};
    }

    render() {
        return (
            <h1>
            {this.state.text}
            </h1>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('container'));
