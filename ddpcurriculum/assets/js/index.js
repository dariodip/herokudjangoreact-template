/**
 * Created by ddipa on 28/03/2017.
 */

var Graph = require('react-graph-vis');
const React = require('react');
const ReactDOM = require('react-dom');


var graph = {
  nodes: [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ],
  edges: [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
};

var options = {
    layout: {
        hierarchical: true
    },
    edges: {
        color: "black"
    }
};

var events = {
    select: function(event) {
        var { nodes, edges } = event;
    }
}

ReactDOM.render(<Graph graph={graph} options={options} events={events} />, document.getElementById('container'));