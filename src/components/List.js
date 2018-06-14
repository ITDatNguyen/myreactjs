import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import Menu from './Menu';
import { connect } from 'react-redux';
import * as actions from '../actions';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data :[] 
        }
    }

    setStateHandler(){
        var newtask = this.state.tasks;
        // console.log("Dat",newtask);
        // var item = "setState..."
        // var myArray = this.state.data.slice();
        // myArray.push(item);
        // this.setState({data: myArray})
    };
    
    async function(indata) {
        this.setState({
            data : indata
        })
    }

    getArea = async () => {
        const reponse =  await this.props.tasks.tasks.then(
            value => {
            this.function(value);
            }
        )
        return reponse;
    }

    remove(index){
        this.state.tasks.splice(index, 1);
        this.setState(this.state);
    }

    incrementCounter(){
        this.setState(
            (prevState, props) => ({
                seconds : prevState.seconds + 1
            })
        );
    }

    componentWillMount(){
        this.getArea();
    }

    handelRemove = (id) =>{
      this.props.deleteTask(id);
        
    }
    // componentDidUpdate(prevProps, prevState) {
    //     this.setStateHandler();
    //     console.log("Did uo date",this.state.tasks);
    // }
    // componentDidMount(){
    //     alert("did mount");
    // }
    render(){
        var { tasks } = this.props.tasks;
        // <Note index={i} key={i} removeNote= { this.remove.bind(this) } >  {e.codeArea} || {e.areaName} </Note>
        return(
            <div>
                {/* <Menu/> */}
                <div className="container">
                    <h3>Note React JS</h3>
                    <div className="form-group">
                    {/* handleAdd = { this.addNote.bind(this) } */}
                        <NoteForm />
                        {/* { this.tasks.map( (e,i)=> <Note index={i} removeNote= removeNote= { this.remove.bind(this) } { this.remove.bind(this) } removeNote= { this.remove.bind(this) } key={i}> {e} </Note>) } */}
                        { this.state.data.map( (e , i) =>
                            <div>
                                <label index={i} key={i} > {e.codeArea} || {e.areaName} </label>
                                <button type="button" onClick = {()=> this.handelRemove(e.id)} className="btn btn-info">Delete</button>
                                <br/>
                            </div>
                        )}
                        <p>seconds: {this.state.seconds}</p>
                    </div>
                </div>
            </div>
        );
    }
}
// handleAdd ham chay cac
const mapStatetoProps = (state) =>{
    // console.log("State new :",state.tasks);
    return {
        tasks : state
    }
};

export default connect(mapStatetoProps, actions)(List);