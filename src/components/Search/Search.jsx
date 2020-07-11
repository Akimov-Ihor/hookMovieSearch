import React, { useState } from "react";
import './Search.css'


const Search = (props) => {
  const [searchValue,setSearchValue]=useState("")
   
  const handeleSearchInputChange=(event)=>{
      setSearchValue(event.target.value)
   }
   const resetInputField=()=>{
     setSearchValue("")
   }
   const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }
  
  return (
      <form className="search">
        <input
         type="text"
         value={searchValue}
         onChange={handeleSearchInputChange}
          
           />
           <input onClick={callSearchFunction} type="submit"  value="Search"/>
       
      </form>
    );
}

export default Search;