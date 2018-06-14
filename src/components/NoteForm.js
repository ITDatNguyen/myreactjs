import React from 'react';
import { connect } from 'react-redux';
import * as actionIndex from './../actions/index';

class NoteForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            isAdding : false ,
            tasks : [{
                "name" : "",
                "age" : ""
            }]
        };
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log("truoc",this.state.tasks.name);
        // avoid case refresh page
        // this.props.handleAdd(this.refs.txt.value);
        this.state.tasks.name = this.refs.txt.value;
        console.log("sau :",this.state);        
        this.props.onAddTask( this.state );
        this.refs.txt.value = '';
    }

    toggle(){
        this.state.isAdding = ! this.state.isAdding;
        this.setState(this.state);
    }

    render() 
    {
        if(this.state.isAdding) {
            return (
                <div>
                    <form onSubmit= { this.handleSubmit.bind(this) } >
                        <input type="text" className="form-control" ref="txt"></input>
                        <br />
                        <button className="btn btn-primary">Add Create</button>
                    </form>
                </div>
                );
        }
        return  <div>
                    <button className="button" onClick= {this.toggle.bind(this)} >+</button>
                </div>
    }
}

const mapStatetoProps = state =>{
    // console.log("Du lieu:",state.tasks);
    return {
        // state
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddTask : (task) => {
            dispatch(actionIndex.addTask(task));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(NoteForm);