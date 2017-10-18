import React from 'react';
import {connect} from 'react-redux';


class PeopleMain extends React.Component {
    render() {
        const {people} = this.props;
        const peopleDiv = people && people.map(person => (<div key={person.id}>{person.name}</div>));
        return (
            <div className="people-main">
                {peopleDiv}
            </div>
        );
    }
}

export default connect((state) => ({
        people: [
            {id: 1, name: 'Elmo'},
            {id: 2, name: 'Ernie'},
            {id: 3, name: 'Bert'}
        ]
    })
)(PeopleMain);