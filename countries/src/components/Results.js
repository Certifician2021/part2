
import React from "react";
import Weather from './Weather'


const Results = ({Result, setNewResult}) =>{
    if(Result.length > 1 && Result.length < 10){
         return(
             <div>
            {Result.map((country,i)=><div key={i}><li key={i}>{country.name.common} <button key={i} onClick={()=>{setNewResult([country])}}>Show</button></li></div>)}
             </div>
         )}
          if (Result.length === 1) {
             return(
                 <div>
                    {Result.map((country,i)=><h2 key={i}>{country.name.common}</h2>)}
                    {Result.map((country,i)=><p key={i}>Capital : {country.capital}</p>)}
                    {Result.map((country,i)=><p key={i}>Area : {country.area}</p>)}
                    {Result.map((country)=>{ return Object.keys(country.languages).map((el,i)=><li key={i}>{el}</li>)})}<br />
                    {Result.map((country,i)=>{return <img key={i} width={200} src={Object.values(country.flags)[1]} alt="flag" />})}
                    <Weather query={Result.map(country=>country)} />
                 </div>
             )
         }
         else{
            return(
                <div>
                    <p>Please enter your search query ...</p>
                </div>
            )
         }
}
export default Results