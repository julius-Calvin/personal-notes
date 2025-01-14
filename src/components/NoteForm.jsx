import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : +new Date(),
            title : '',
            body : '',
            createdAt : new Date().toISOString(),
            archived: false,
            charLimit:50
        }

        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.bodyChangeHandler = this.bodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    titleChangeHandler(event) {
        const title = event.target.value;
        const maxCharLimit = 50;
        if(title.length <= maxCharLimit) {
            const remainingChar = maxCharLimit - title.length;
            this.setState(() => {
                return {
                    title : event.target.value,
                    charLimit : remainingChar >=0 ? remainingChar : 0
                };
            });
        }
    }

    bodyChangeHandler(event) {
        this.setState(() => {
            return {
                body : event.target.value   
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);   
        
        this.setState(() => {
            return {
                title : '',
                body : ''
            }
        })
    }

    render() {
        return(
            <div className="note-form">
                <h2>Buat Catatan</h2>
                <p className="note-form__title__char-limit" placeholder="Sisa karakter" onKeyDown={this.titleChangeHandler}>Sisa karakter : {this.state.charLimit}</p>
                <form onSubmit={this.onSubmitHandler} >
                    <input className="note-form__title" placeholder="Judul" value={this.state.title} onChange={this.titleChangeHandler} />
                    <input className="note-form__body" placeholder="Your text..." value={this.state.body} onChange={this.bodyChangeHandler}/>
                    <button disabled = {this.state.title === '' || this.state.body === ''}>Buat</button>
                </form>
            </div>
        )
    }
        
    
}

export default NoteForm;