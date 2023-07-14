import './App.css';
import Header from './Components/Header';
// import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {

  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {name, email}])
    setName("")
    setEmail("")
  }

  const removeItem = (index) => {
   let arr = data;
   arr.splice(index,1);
   setData([...arr]);
  }

  return (

    <div className='App'>
      <Header/>
      <div className='form'>
        <Stack spacing={2} direction="row"> 
          <TextField value={name}  onChange={(event) => setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} variant="contained">
            <AddIcon/>
          </Button>
          
        </Stack>
      </div>

      <div className='data'>
          <div className='data_val'>
            <h4>Name</h4>
            <h4>Email</h4>
            <Button variant="contained" color= "error">
              <DeleteIcon/>
            </Button>
          </div>
        {
          data.map((element, index) => {
            return(
                <div key={index} className='data_val'>
                    <h4>{element.name}</h4>
                    <h4>{element.email}</h4>
                    <Button onClick={() =>removeItem (index)} variant="contained" color= "error">
                        <DeleteIcon/>
                    </Button>
                </div>
            )
          })
        }
      </div>
    </div> 

  );
}

export default App;
