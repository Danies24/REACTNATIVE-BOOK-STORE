import {USER_INFO,EDIT_PROFILE, USER_BOOLEAN, BOOK_MARK} from './actionTypes';

export const UserInfoAction = (user)=>({type:USER_INFO,payload:user})
export const EditProfileAction = (name)=>({type:EDIT_PROFILE,payload:name})
export const userBooleanAction = (name)=>({type:USER_BOOLEAN,payload:name})
export const bookmarkAction = (book)=>({type:BOOK_MARK,payload:book})