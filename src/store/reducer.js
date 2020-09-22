const initState={
    registeredUser:{
            "username":"hruday@gmail.com",
            "password" :'hruday123'       
    },
    employeeList:{
        user:[{
            "id":1,
            "name":"test1",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
            },
            {
            "id" : 2,
            "name":"test2",
            "age" : "12",
            "gender":"male",
            "email" : "test2@gmail.com",
            "phoneNo" : "9415346314"
            },
            {
            "id":3,
            "name":"test3",
            "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"
        }
        ]
    },
    isAuth:false
}
const reducer =(state=initState,action)=>{
    console.log('The action payload',action);
    if(action.type === 'Login_Successful'){
        action.payload.ownProps.history.push('/EmployeeList')
        return({...state,
              isAuth:true  
            }
        )
    }
    else if(action.type === 'Login_UnSuccessful'){
        return({...state,
               isAuth:false
            }
        )
    }
    else if (action.type == 'GetEmployeeList'){
        return({
            ...state,
            employeeList:state.employeeList
        })
    }
    return state;
}

export default reducer;