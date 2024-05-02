import React from 'react'

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <h2>{props.nama}</h2>
            <p>{props.domisili}</p>
            <p>{props.Hp}</p>
        </div>
    );
};

export default Profile;