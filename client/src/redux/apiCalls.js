import { loginError, loginFailure, loginStart, loginSuccses } from "./userRedux"
import {publicRequest} from '../requestMethods';

export const login = (dispatch, user)=>{
    dispatch(loginStart());
    try{
        publicRequest.post("/auth/login", user).then((res)=>{
            dispatch(loginSuccses(res.data));
        }).catch((e)=>{
            dispatch(loginFailure());
        })
    }catch(e){
        console.log(e);
        dispatch(loginError());
    }
}
export const register = (dispatch, user, navigate)=> {
    dispatch(loginStart());
    try{
        publicRequest.post("/auth/register", user).then((res)=>{
            dispatch(loginSuccses(res.data));
            navigate('/')
        }).catch((e)=>{
            console.log(e);
            dispatch(loginFailure());
        })
    }catch(e){
        dispatch(loginError());
        return false;
    }
}