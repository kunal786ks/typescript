import * as React from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button';
import { Note } from '../models/note.model';
import  Alert  from 'react-bootstrap/esm/Alert';
interface ICreateNotesProps {
  notes:Note[],
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
  const titleRef=React.useRef<HTMLInputElement | null>(null);
  const textRef=React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef=React.useRef<HTMLInputElement | null>(null);
  const [error,setError]=React.useState<string>("");

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(titleRef.current?.value==="" || textRef.current?.value===""){
      return setError("All fields are mandatory")
    }
    setError("");
    setNotes([...notes, {
      id:(new Date()).toString(),
      title:(titleRef.current as HTMLInputElement).value,
      text:(textRef.current as HTMLTextAreaElement).value,
      color:(colorRef.current as HTMLInputElement).value,
      date:(new Date()).toString()
    }]);

    (titleRef.current as HTMLInputElement).value="";
    (textRef.current as HTMLTextAreaElement).value='';
  }

  return (
    <>
      <h2>Create Note</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
    	      <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter the title' ref={titleRef}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
    	      <Form.Label>Text</Form.Label>
            <Form.Control type='text' placeholder='Enter your notes' as="textarea" rows={3} ref={textRef}/>
        </Form.Group>
        <Form.Group className='mb-3'>
    	      <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
            <Form.Control type='color' id='colorInput' title="choose your color" defaultValue="#dfdfdf" placeholder='Enter the title' ref={colorRef}/>
        </Form.Group>
        <Button type="submit" variant='primary'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
