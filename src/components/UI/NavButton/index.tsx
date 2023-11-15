"use client"
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaX } from "react-icons/fa6";

export default function NavButton() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };
    return (
        <button onClick={handleClick}>
            {showMenu ? (
                <FaX width={16} height={16} color={'red'} />
            ) : (
                <TiThMenu width={16} height={16} color={'red'} />
            )}
        </button>
    )
}