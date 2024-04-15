import { useParams } from 'react-router-dom';

function Profile() {
    const { username } = useParams();

    return (
        <>
            <div>
                <h1>Profile page</h1>
                <span>Username: {username}</span>
            </div>
            {/* {username.startsWith('@') ? (
            ) : (
                <Navigate to={'/not-found'} />
            )} */}
        </>
    );
}

export default Profile;
