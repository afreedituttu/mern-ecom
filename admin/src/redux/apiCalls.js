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
        dispatch(loginError());
    }
}
export const register = (dispatch, user)=> {
    dispatch(loginStart());
    try{
        publicRequest.post("/auth/register", user).then((res)=>{
            dispatch(loginSuccses(res.data));
            return true;
        }).catch((e)=>{
            dispatch(loginFailure());
            return false;
        })
    }catch(e){
        console.log(e);
        dispatch(loginError());
        return false;
    }
}
