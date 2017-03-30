/**
 * Created by ddipa on 28/03/2017.
 */

const React = require('react');
const ReactDOM = require('react-dom');


var Hello = React.createClass ({
    render: function() {
        return (
            <h1>
            Hello, Heroku!
            </h1>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('container'));
