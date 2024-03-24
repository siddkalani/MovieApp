// context(warehouse)
// Provider(delivery)
// consumer / usecontext(you)
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({children}) => {
    const[isLoading , setIsLoading] = useState(true)
    const[movie , setMovie] = useState([])
    const[query , setQuery] = useState("titanic")
    const [dataa , setDataa ] = useState({
        show:"false",
        msg:""
    })
    
    
    const getMovies = async(url) =>{
    try{
   
        const res = await fetch(url)
        const data = await res.json();
        console.log(data)
        console.log(movie)
        if(data.Response==="True"){
            setIsLoading(false)

            setMovie(data.Search)
        }  else{
            setDataa({
                show:true,
                msg:"err"
            })
        }
        
    } catch(error){
        console.log(error)
    }
    }
    useEffect(()=>{
        getMovies(`${API_URL}&s=${query}`)
    },[])
    

    return (<AppContext.Provider value={{isLoading , dataa , movie , getMovies ,query , setQuery}}>{children}</AppContext.Provider>)
};

const useGlobalFunction=()=>{
    return (useContext(AppContext))
}

export {AppContext, AppProvider,useGlobalFunction};