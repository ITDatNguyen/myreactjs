import React from 'react';
import { connect } from 'react-redux';
import * as actionIndex from './../actions/index';

class Note extends React.Component {

    // constructor(props){
    //     super(props);
        
    // }

    handelRemove()
    {
        var { task, removeNote } = this.props;
        // console.log("delete :",{task});
        // console.log("tag",this.props.task);
        removeNote(task);
    }

    render() 
    {
        return (
            <div>
                <span className="label"> {this.props.children} </span>
                <br/>
                <button type="button" onClick= { this.handelRemove.bind(this) } className="btn btn-info">Delete</button>
            </div>
        )
    }
}

const mapStatetoProps = state =>{
    return {
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        deleteTask : (index) => {
            dispatch(actionIndex.deleteTask(index));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(Note);


