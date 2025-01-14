import React from "react";

function ArchivedButton({id, onArchived, archived}) {
    return(    
        <button className="note-item__archive-button" onClick={() => onArchived(id)}>
            {archived ? "Keluarkan dari arsip" : "Arsipkan"}
        </button>
    );
}

export default ArchivedButton