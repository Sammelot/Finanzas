"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorAPi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition,component){
            if(component.state.dirty && !confirm('Salir sin guardar?')){
                transition.abort();
            }
        }
    },
    
    getInitialState: function(){
        return {
            author: { id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
        var authorId = this.props.params.id;

        if(authorId){
            this.setState({author: AuthorAPi.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormisValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'El nombre debe se mayor a tres letras';
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'El apellido debe se mayor a tres letras';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        
        return formIsValid;

    },

    saveAuthor: function(event){
        event.preventDefault();

        if(!this.authorFormisValid()){
            return;
        }
        AuthorAPi.saveAuthor(this.state.author);
        this.setState({dirty: false});
        toastr.success('Autor guardado');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <AuthorForm
            author={this.state.author}
            onChange={this.setAuthorState}
            onSave={this.saveAuthor}
            errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;