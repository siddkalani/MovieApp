import React from 'react'
import { useGlobalFunction } from './context'

const Search = () => {
  const{query, setQuery,dataa} = useGlobalFunction();
  return (
    <div>
      <section className="search-section">
        <h2>Search your favourite movie</h2>
        <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
          <div>
            <input 
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e)=>
              setQuery(e.target.value)} />
          </div>
        </form>
        <div className="card-error">
          <p> {dataa.show&&dataa.msg} </p>
        </div>
      </section>
    </div>
  )
}

export default Search