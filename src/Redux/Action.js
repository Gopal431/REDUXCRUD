import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequst = () =>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequst = (err) =>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList = (data) =>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}
export const FetchUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequst());
      //setTimeout(() => {
        axios.get('http://localhost:8000/user').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist));
          }).catch(err=>{
            dispatch(failRequst(err.message))
          })
     // }, 2000);
     
    }
}
export const Removeuser=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequst());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/user/'+code).then(res=>{
            dispatch(deleteUser());
          }).catch(err=>{
            dispatch(failRequst(err.message))
          })
     // }, 2000);
     
    }
}
export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequst());
      //setTimeout(() => {
        axios.post('http://localhost:8000/user',data).then(res=>{
            dispatch(addUser());
            toast.success('User Added successfully.')
          }).catch(err=>{
            dispatch(failRequst(err.message))
          })
     // }, 2000);
     
    }
}
export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequst());
      //setTimeout(() => {
        axios.put('http://localhost:8000/user/'+code,data).then(res=>{
            dispatch(updateUser());
            toast.success('User Updated successfully.')
          }).catch(err=>{
            dispatch(failRequst(err.message))
          })
     // }, 2000);
     
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequst());
      //setTimeout(() => {
        axios.get('http://localhost:8000/user/'+code).then(res=>{
            const userlist=res.data;
            dispatch(getUserObj(userlist));
          }).catch(err=>{
            dispatch(failRequst(err.message))
          })
     // }, 2000);
     
    }
}