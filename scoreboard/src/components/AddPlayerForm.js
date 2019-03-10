import React, { Component } from 'react';

class AddPlayerForm extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({value: ''})
    }

    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Enter a Player's Name"
                />

                <input
                    type="submit"
                    vlaue="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;