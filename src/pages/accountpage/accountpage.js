import React, {useEffect} from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Login from "../../components/auth/login/login";
import { useHistory } from 'react-router-dom';

import "./accountpage.scss";
import { authService } from "../../firebase";

const AccountPage = ({ refreshUser, userObj, isLoggedIn }) => {
    const history = useHistory();

    useEffect(()=>{
        authService.onAuthStateChanged((user)=>{
            if(!user){
                history.push("/account/login");
            }
        })
    })

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
  return (
     <div>
        {/*isLoggedIn?(<div>loggedin</div>):(<Redirect to="/account/login"/>)*/}
        {!isLoggedIn && (<Redirect to="/account/login"/>)}
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
        <p> {userObj.displayName
            ? `${userObj.displayName}의 Profile`
            : "Profile"}</p>
        </span>   
     </div>
  )
};

export default AccountPage;
