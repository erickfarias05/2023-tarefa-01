import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Pesquisas = () => {
  return (
    <>
      <form action="javascript:void(0);">
        <input
          type="text"
          className="form-control add-task"
          placeholder="New Task..."
        />
      </form>
    </>
  )
}

const Filtros = () => {
  let lista = [
    "All",
    "Active",
    "Completed"
  ];
return (
  <>
    {lista.map((nome, index) => 
    <li role="presentation" className="nav-item active-task">
      <a href='#' className='nav-link'>{nome}</a>
    </li>)}
  </>
)
}

const ItensDoSite = () => {
let lista = [
  "Create theme",
  "Work on Wordpress",
  "Organize office main department",
  'Error solve in HTML template'
];
return (
  <div className='todo-list'>
    {lista.map((nome, index) => 
    <div className='todo-item'>
      <div className='checker'>
        <span><input type='checkbox'/></span>
      </div>

      <span>{nome}</span>
      
      <a href="javascript:void(0);" className="float-right remove-todo-item">
        <i className="icon-close"></i>
      </a>
    </div>)}
  </div>
)
}

const App = () => {
return (
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div className="card card-white">
                      <div className="card-body">
                          <Pesquisas/>
                          <ul className="nav nav-pills todo-nav">
                              <Filtros/>
                          </ul>
                          <ItensDoSite/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
)
}

export default App