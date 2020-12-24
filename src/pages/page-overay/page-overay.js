import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import "./page-overay.scss"
const PageOveray = ({hidden}) => {
    useEffect(() => {
        let pageoveray =document.querySelector(".pageoveray");

        if(!hidden){
            pageoveray.classList.add("visible");
        }else{
            pageoveray.classList.remove("visible");
        }
      
    })
    return (
        <div className="pageoveray"/>
    );
}
const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden,
  });
  
export default connect(mapStateToProps) (PageOveray);