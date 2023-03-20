import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
const imgUrl='/have_a_nice_day.png';
const {userId} = useParams();



 return(
    <div className="profile">
        <h3>Profile page for user with user Id: {userId}</h3>
        <div className="profile-data">
            <img className="profile-image" src={ window.location.origin + imgUrl} />
            <div>
                <p>Name: Profile Bear</p>
                <p>account: Active</p>
             </div>
        </div>
    </div>
    )
}   


export default ProfilePage;