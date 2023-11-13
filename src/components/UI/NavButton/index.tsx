"use client"
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

export default function NavButton(){
    const ShowMenu = useState(false);
    
    return(
        <button><TiThMenu width={16} height={16} color={"red"} /></button>
    )
}