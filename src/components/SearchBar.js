import React from 'react';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}