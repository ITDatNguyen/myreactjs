import * as type from './../constants/ActionType'
import Note from '../components/Note';
import data from '../data/address';

const newdata = new data();
var initialState = newdata.getApi();
var myReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case type.LOAD_ALL :
            return state;
        case type.ADD_TASK :
            // console.log("action gui tu components",action);
            // var task = action.task;
            // state.push(task);
            // // console.log(state);
            // var newtask = action.task;
            // console.log("tasks :",newtask);
            // // console.log("action tasks",action.task.tasks);            
            // state.push(newtask);
            // console.log("State gui tu reducer",state);
            // this.setState(state);
            var { tasks } = action.task;
            state.push(tasks);
            console.log(tasks);
            // console.log("State Reducer",state);
            return [...state];
        case type.DELETE_TASK:
            console.log(action);
            return newdata.delApi(action.code);
        default :
            return state;
    }
}
export default myReducer;