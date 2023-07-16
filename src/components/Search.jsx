import{ useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return (
        <>
    <label>Artist Name</label><br></br>
    <input ref ={artist} type = 'text' className = "form-control" placeholder="Search Artist Songs"/>
    <button className="btn btn-info" onClick={()=>{
        fn(artist.current.value); 
    }}>Search</button>
    <br/>
    </>
    );
}