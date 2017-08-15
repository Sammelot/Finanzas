"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                    name="firstName"
                    label="Firt name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}/>
                    
                <Input type="text"
                    name="lastName"
                    label="Last NAme"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}/>

                    <Input type="text"
                    name="ingreso"
                    label="Ingreso"
                    value={this.props.author.ingreso}
                    onChange={this.props.onChange}
                    error={this.props.errors.ingreso}/>

                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;