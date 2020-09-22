import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux'

function Login(props) {
    const[userCred,setUserCred] = useState({
                                    email:'',
                                    password:''
                                });
    useEffect(()=>{
        console.log('props received',props);
    },[])

    const handleChange = (e)=>{
        setUserCred({...userCred,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = ()=>{
        console.log(userCred);
        if(userCred.email == "" || userCred.password==""){
            alert('Username or password can\'t be blank')
        }
        else
        props.checkAuthentication(userCred,props.user);
    }
  return (
    <div className="login">
        <label>Username</label>
            <input type='email' name='email' onChange={handleChange}/>
        <label>Password</label>
            <input type='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

const mapStateToProps = (state)=>{
    console.log(state);
    return({
        user:state.registeredUser
    })
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return(
        {
            checkAuthentication:(formVals,user)=>{
                console.log('The form fields value',formVals);
                console.log('The redux own fields value',user);
                console.log('The component props',ownProps);
                if(formVals.email === user.username && formVals.password === user.password){
                    console.log('Successful sign in');
                    dispatch({type:'Login_Successful',payload:{ownProps,isAuth:true}});
                }
                else{
                    console.log('UnSuccessful sign in');
                    dispatch({type:'Login_UnSuccessful',payload:{ownProps,isAuth:false}});
                }
            
            }
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
