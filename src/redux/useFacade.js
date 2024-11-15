import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getListThunk, updateListThunk, updateRemoveChange } from "./thunkFunction";

export const useCreateFacade = () => {
    const { list, error } = useSelector(state => state.private);
    const dispatch = useDispatch();
    
    useEffect(()=>{
     dispatch(getListThunk())
    },[dispatch])
    
    const updateList = (id) => {
        dispatch(updateListThunk(id))
    }

    const updateNotChangeList = (id) => {
        dispatch(updateRemoveChange(id))
    }
    return {
        list,
        error,
        updateList,
        updateNotChangeList
    }
}
