import Head from "next/head";
import React,{useState} from "react";

export default function Header() {
    const[counter , setCounter] = useState(0);
    return (
        <>
            <button onClick={()=>setCounter( counter+1 )}>clicked</button>
            <p>
                {counter}
            </p>
        </>
    )
}