import React from 'react';
import { connect } from 'react-redux';
import {PageOverayContainer} from './page-overay.styles';

const PageOveray = (props) => {
    return (
        <PageOverayContainer {...props}/>
    );
}
const mapStateToProps = ({ cart: { hidden } }) => ({
    hidden,
  });
  
export default connect(mapStateToProps) (PageOveray);