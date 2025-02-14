import React, {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import Inputgroup from '../components/Filters/Category/Inputgroup';

const Episodes = () => {

  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let {air_date, name } = info;
  

  let api = `https://rickandmortyapi.com/api/episode/${id}`


  useEffect(() =>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setInfo(data);

      let b = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );

      setResults(b);
    })();

  }, [api]);
  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-3'>Episode : <span className='text-success'> {name === "" ? "Unkown" : name} </span> </h1>
        <h5 className='text-center'>Air Date : {air_date === "" ? "Unkown" : air_date}</h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Select Episode</h4>
          <Inputgroup setId ={setId} total ={51}/>
          </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page='/episodes/' results={results} />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Episodes
