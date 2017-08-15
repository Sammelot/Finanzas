"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
        
        return (
            <div>
                <h1>XXXX----Page not Found!!!----XXXX</h1>
                <p>No hay nada para ver!!1 :(</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
