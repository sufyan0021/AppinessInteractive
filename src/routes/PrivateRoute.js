import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';


function PrivateRoute({isAuth,component:Component,...rest}) {
    useEffect(()=>{
        console.log('PrivateRoute props',...rest+' '+isAuth);
    },[])
  return (
    <Route {...rest} component={(props)=>{
        return(
            isAuth? (
                <Component {...props}/>
            ):(
                <Redirect to="/Login"/>
            )
        )}}>
    </Route>);
}

const mapStateToProps = (state)=>{
    console.log(state);
    return({
        user:state.registeredUser,
        isAuth:state.isAuth
    })
}


export default connect(mapStateToProps)(PrivateRoute);
