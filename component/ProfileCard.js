import '../global.css';

const ProfileCard = (props) => {
    return(
        <div class="col-md-4">
			<div class="card text-center py-3">
                <img src={props.UserContact} class="w-50 card-img-top m-auto" alt="..."/> 
			</div>
		</div>
    );
}
export default ProfileCard;