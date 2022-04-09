import Links from "./Links";
import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';

//debounce help to request to the api while typing in a input 


const Search = () => {

  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  //debounce for 3 second
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  },[debouncedValue]);


  return (
    <div className="m-auto relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input value={text} placeholder="Search Searchoo" onChange={(e)=>setText(e.target.value)} type="text" className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"/>
      {text && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={()=> setText("")}>
          x
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search;