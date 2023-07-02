// axios call
// higher order function 
// interface
// rendering a list
// updating a list
//click events
// custom hook

// TODO: implememnt render props

import React, { ReactElement, useEffect, useState } from 'react';
import './styles.css'
import  MyHeader, { SecondHeader }  from './components/myheader';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClickCounter from './components/clickcounter';
import HoverCounter from './components/hovercounter';
import useAxios from './hooks/useAxios';


interface TODO {
  completed: boolean,
id: number,
title: string,
userId: number,
color?: string,
}

export const FirstComponent = (props: any) => {

  return (
   <> 
   <MyHeader/>
   <ClickCounter/>
   <HoverCounter/>


   <SecondHeader/>
   {console.log('props: ', props.todos)}
   {props.todos && props.todos.map((todo: TODO) => {
     return (
         props.displayShortTitles(todo, props.todos)
     )
   })}
   </>
   )
 }


function App() {

  const [color] = useState<string>('black')
  
  const {loading, data, error} = useAxios('https://jsonplaceholder.typicode.com/todos')
  const [todos, setTodos] = useState<TODO[] | undefined>(data)


  function setSpecificTodoColor(id: number, thetodolist: TODO[]) {
    let updatedColorList: TODO[] = []
    thetodolist.map((todo) => {
      if (todo.id === id) {
        updatedColorList.push({...todo, color: todo?.color === 'red' ? 'black': 'red'})
      } else {
        updatedColorList.push(todo)
      }
    })
    setTodos(updatedColorList)
  }

  function displayShortTitles(todo: TODO, data: TODO[]): ReactElement | undefined {
      return (
        <>
       <button key={`${todo.id}`} onClick={() => setSpecificTodoColor(todo.id, data)}>
          <div style={{marginTop: 4, color: todo?.color || color}}>{todo.title}</div>
        </button>
        </>
      )
  }


  return (
    <BrowserRouter>
    <Routes>
         && <Route path="/" element={<FirstComponent todos={todos || data} displayShortTitles={displayShortTitles} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
