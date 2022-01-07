import React, { useState } from 'react';

export default function NewSongForm({addSong}) {
    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        addSong(title)
        setTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Song Name: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add song" />
        </form>
    )
}
