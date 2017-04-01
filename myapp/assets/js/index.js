/**
 * Created by ddipa on 28/03/2017.
 */

const React = require('react');
const ReactDOM = require('react-dom');

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: 'Hello from React-Django-Heroku',
            list: props.context.example_list };
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.text}
                </h1>
                <h2>
                    {this.state.list.map(item => {
                      return <span>{item['key']}<br/></span>
                    })}
                </h2>
            </div>
        );
    }
}

ReactDOM.render(<Hello context={window.props} />, document.getElementById('container'));
