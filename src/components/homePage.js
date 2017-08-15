"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Fixter administration</h1>
                <p>React, React Router, and flux for ultra-responsive web apps.</p>
                <Link to = "about" className="btn btn-success btn-lg">Learn More</Link>
                 </div>
        );
    }
});

module.exports = Home;