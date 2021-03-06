import React from "react";
import { useHistory } from 'react-router-dom';

import "./accountpage.scss";
import { authService } from "../../firebase";
import {connect} from "react-redux";

const AccountPage = ({currentUser}) => {
    const history = useHistory();
    console.log(currentUser);
    

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
  return (
     <div>
        {/*isLoggedIn?(<div>loggedin</div>):(<Redirect to="/account/login"/>)*/}
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
        {currentUser ? <div>{currentUser.displayName}</div>:<div>null</div>}
        </span>   
     </div>
  )
};

const mapStateToProps=state=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(AccountPage);
