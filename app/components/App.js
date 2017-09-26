import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';



class App extends React.Component {
    // //set starting props and state
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         notes: [
    //             {
    //                 //random id generation
    //                 id: uuid.v4(),
    //                 task: 'Learn React'
    //             },
    //             {
    //                 id: uuid.v4(),
    //                 task: 'Do laundry'
    //             }
    //         ]
    //     };
    // }

    // set methods

    addNote = () => {
        // I tend to favor functional style whenever that makes sense.
        // this.setState({
        //     notes: this.state.notes.concat([{
        //         //random id generation
        //         id: uuid.v4(),
        //         task: 'New task'
        //     }])
        // });
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New task'
        });
    }

    deleteNote = (id, e) => {
        // Avoid bubbling to edit
        e.stopPropagation();
        // return array of notes without deleted note
        // this.setState({
        //     notes: this.state.notes.filter(note => note.id !== id)
        // });
        this.props.NoteActions.delete(id);
    }

    activateNoteEdit = (id) => {
        // this.setState({
        //     notes: this.state.notes.map(note => {
        //         //find doublecliked note and set it's editing to 'true'
        //         if(note.id === id) {
        //             note.editing = true;
        //         }
        //         return note;
        //     })
        // });
        this.props.NoteActions.update({id, editing: true});
    }

    editNote = (id, task) => {
        // this.setState({
        //     //as editing ends, we set editing as 'false' and set new task text
        //     notes: this.state.notes.map(note => {
        //         if(note.id === id) {
        //             note.editing = false;
        //             note.task = task;
        //         }
        //         return note;
        //     })
        // });
        this.props.NoteActions.update({id, task, editing: false});

    }

    render() {
        const {notes} = this.props;

        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
            </div>
        );
    }
}

export default connect(({notes}) => ({
    notes
}), {
    NoteActions
})(App)
