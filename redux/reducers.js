import {USER_INFO,EDIT_PROFILE, USER_BOOLEAN, BOOK_MARK} from './actionTypes';


const initialState = {
    EDIT_NAME:{wordName : "Varsini",number:"123456",email:"abc@gmail.com",statecountry:"Coimbatore"},
    USER_DETAILS :{userName: "Guest",passWord : "Hi"},
    USER_BOOLEAN :{userStatus:false},
    BOOK_MARK_LIST :[],
};

export const mainreducer = (state = initialState, action) => {
  
  switch (action.type) {
        case EDIT_PROFILE:
            return{
              ...state,
              EDIT_NAME: action.payload
            };
        case USER_INFO :
            return{
                ...state,
                USER_DETAILS:action.payload
            };
        case USER_BOOLEAN:
            return {
                ...state,
                USER_BOOLEAN:action.payload
            }
        case BOOK_MARK :
            return {
                ...state,
                BOOK_MARK_LIST:[...state.BOOK_MARK_LIST,action.payload]
            }

    default:
      return state;
  }
};