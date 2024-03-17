import { Navigate, useParams } from 'react-router-dom';

function Profile() {
    const { username } = useParams();

    return (
        <>
            {username.startsWith('@') ? (
                <div>
                    <h1>Profile page</h1>
                    <span>Username: {username}</span>
                </div>
            ) : (
                <Navigate to={'/not-found'} />
            )}
        </>
    );
}

export default Profile;
