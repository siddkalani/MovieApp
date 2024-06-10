
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({children}) => {
    const[isLoading , setIsLoading] = useState(true)
    const[movie , setMovie] = useState([])
    const[query , setQuery] = useState("titanic")
    const [dataa , setDataa ] = useState({
        show: false,
        msg: ""
    })
    
    const getMovies = async(url) =>{

        setIsLoading(true)
        
    try{
   
        const res = await fetch(url)
        const data = await res.json();
        
        console.log(data)
        if(data.Response==="True"){
            setIsLoading(false)
            setDataa({
                show:false,
                msg:""
            })
            setMovie(data.Search)
        }  else if(data.Response==="False"){
            if(data.Error==="Incorrect IMDb ID." ){
                setDataa({
                    show:true,
                    msg:"",
                })
                console.log(data.Error)
            } else{
                setDataa({
                    show:true,
                    msg:data.Error,
                })
            }
          

        }
        
    } catch(error){
        console.log(error)
    }
    }
    
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)
        },500)
        return()=> clearTimeout(timeOut);
    },[query])
    return (<AppContext.Provider value={{isLoading , dataa , movie , getMovies ,query , setQuery,dataa , setDataa}}>{children}</AppContext.Provider>)
};

const useGlobalFunction=()=>{
    return (useContext(AppContext))
}

export {AppContext, AppProvider,useGlobalFunction};