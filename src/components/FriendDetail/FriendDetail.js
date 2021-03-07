import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>this is friend detail: {friendId}</h1>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>
        </div>
    );
};

export default FriendDetail;