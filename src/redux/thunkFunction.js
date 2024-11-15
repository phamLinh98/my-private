import { getListFromAPI, logError, updateListFromAPI } from "./privateSlice";

 export const getListThunk = () => {
   return async(dispatch) => {
        try {
            const data = await fetch('http://localhost:4000/privates');
            const response = await data.json();
            dispatch(getListFromAPI(response));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }


 export const updateListThunk = (id) => {
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;

    return async(dispatch) => {
        try {
            const data = await fetch(`http://localhost:4000/privates/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: true,
                    time: formattedDateTime,
                }),
            });
            const response = await data.json();
            dispatch(updateListFromAPI(response));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }

 export const updateRemoveChange = (id) => {

    return async(dispatch) => {
        try {
            const data = await fetch(`http://localhost:4000/privates/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: false,
                    time: '',
                }),
            });
            const response = await data.json();
            dispatch(updateListFromAPI(response));
        }
        catch(error){
            dispatch(logError(error))
        }
    }
 }