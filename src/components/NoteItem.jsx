import React from "react";
import DeleteButton from "./the_buttons/DeleteButton";
import ArchivedButton from "./the_buttons/ArchivedButton";

function NoteItem({ id, title, createdAt, archived, body, onDelete, onArchived }) {
    return(
        <div className="note-item">
            <NoteItemText title={title} createdAt={createdAt} body={body} />
            <NoteItemButtons id={id} archived={archived} onDelete={onDelete} onArchived={onArchived}/>
        </div>
    )
}

function NoteItemText({ title, createdAt, body }) {
    return(
        <div className="note-item__text">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date"> {createdAt}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

function NoteItemButtons({ id, archived, onDelete, onArchived }) {
    return(
        <div className="note-item__buttons">
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchivedButton id={id} archived={archived} onArchived={onArchived}/>
        </div>
    )
}
export default NoteItem;