import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (anything) => {
        const url = `/friend/${anything}`
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>Id: <Link to={`/friend/${id}`}>
                <button> show details of {id}</button></Link> </p>
                {/* second process of clickEvent */}
            <button onClick={() => handleClick(id)}>click here</button>
        </div>
    );
};

export default Friend;