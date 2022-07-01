import '../global.css';
import ProfileCard from './ProfileCard';
import first_img from '../assets/facebook.png'
import second_img from '../assets/github.png'
import third_img from '../assets/linkedin.png'


const ProfileContent = () => {
    return(
        <section class="container py-5" id="contact">
            <div class="row">
                <ProfileCard UserContact={first_img}/>
                <ProfileCard UserContact={second_img}/>
                <ProfileCard UserContact={third_img}/>
            </div>	
        </section>
    );
}
export default ProfileContent;