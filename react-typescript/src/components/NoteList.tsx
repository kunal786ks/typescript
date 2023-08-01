import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';
interface INoteListProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    // console.log("the note to be deleted",id)
    setNotes(notes.filter(note => note.id !== id))
  }
  const renderNotes = () => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />
    })
  }
  return (
    <>
      <h2 className='mt-3'>Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
