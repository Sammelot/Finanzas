"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(!confirm('Estás seguro de lleer esta aburrida página?')){
                transition.about();
            }else{
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Estas seguro de salir de aquí?')){
                transition.about();
            }
            
        }
    },
    render: function() {
        return (
        <div>
            <h1>About</h1>
            <p>
                This application uses the following tecnologies:
                <ul>
                    <li>React</li>
                    <li>React router</li>
                    <li>flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Bowserify</li>
                    <li>Bootstrap</li>
                </ul>
            </p>
        </div>
        );
    }
});

module.exports = About;