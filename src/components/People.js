import React from 'react';

function People(props) {

    const { people } = props;

    return <div>
        <h1>People</h1>
        {people.map((data, i) => (
            <div>
                <img src={data.icon} />
                <p key={data.id}>{data.username}</p>
            </div>
        ))}
    </div>
}

export default People;