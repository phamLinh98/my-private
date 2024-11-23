import { getListPrivates, updatePrivate } from "../../api/connectApi";
import { getListFromAPI, logError, updateListFromAPI } from "./privateSlice";

 export const getListThunk = () => {
   return async(dispatch) => {
        try {
            const data = await getListPrivates('/api/privates');
            dispatch(getListFromAPI(data));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }


 export const updateListThunk = (id) => {
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')}(${currentDateTime.getHours().toString().padStart(2, '0')}:${currentDateTime.getMinutes().toString().padStart(2, '0')}:00)`;

    return async(dispatch) => {
        try {
            const data = await updatePrivate(`/api/update/${id}`, formattedDateTime, true)
            dispatch(updateListFromAPI(data));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }

 export const updateRemoveChange = (id) => {
  
    return async(dispatch) => {
        try {
            const data = await updatePrivate(`/api/update/${id}`, null , false)
            dispatch(updateListFromAPI(data));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }