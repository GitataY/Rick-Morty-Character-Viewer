import React, { useState, useEffect } from 'react'
//import image from './Images/run.jpg'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return( 
    <BrowserRouter>
      <div className='App'><Navbar /></div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />
      </Routes>
    </BrowserRouter> 
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState('');


  let [fetchedData, updatefetchedData] = useState([]);
  let { info, results} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json())
      updatefetchedData(data);
    })()

  },[api])

  return (
    <div className="App">

      <Search setSearch = {setSearch} />

      <div className="container">
        <div className="row">
            <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page='/' results={results}/>
  
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>

      




    </div>);
}

export default App;
