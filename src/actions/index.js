import * as type from './../constants/ActionType';
export default actionIndex => {
    loadAll : () => {
        return {
            type : type.LOAD_ALL
        }
    };
    status: () => {
        return {
            type : type.TOGGLE_STATUS
        }
    };
    sort : (sort) => {
        return {
            type :type.SORT,
            sort 
            //sort: sort
        }
    };
}

export const addTask  = (task) =>{
    return {
        type : type.ADD_TASK,
        task : task,
    }
};

export const deleteTask = (id) =>{
    return {
        type: type.DELETE_TASK,
        code : id
    }
}