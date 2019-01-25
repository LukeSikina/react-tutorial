import React from 'react';
import { getPeople, getPeopleP } from './api';

class StatefullButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0,
            people: [],
        };
        this.count = this.count.bind(this);
    }

    componentDidMount() {
        getPeopleP().then(newPeople => {
            this.setState({
                people: newPeople,
            })
        })
    }

    count(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    renderPeople(people) {
        return people
            .map((person) => {
                return (<div key={person.email}>
                    <div>{"Name: " + person.name}</div>
                    <div>{"Email: " + person.email}</div>
                </div>);
            })
    }
    
    render() {
        return (
            <div>
                <div>{this.renderPeople(this.state.people)}</div>
                <button onClick={this.count}>
                    <div>{"Name: " + this.props.name}</div>
                    <div>{"Count: " + this.state.count}</div>
                </button>
            </div>
        )
    }
};

export default StatefullButton;