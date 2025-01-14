import React from "react";
import NoteItem from "../NoteItem";

function NoteList({ notes, onDelete, onArchived }) {
    return(
        <div className="note-list">
            {
                notes.map((note) => {
                    return(
                        <NoteItem 
                        {...note}
                        key={note.id}
                        onDelete={onDelete}
                        onArchived={onArchived} />
                    )
                })
            }
        </div>
    )
}

export default NoteList;