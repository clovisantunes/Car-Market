import React from "react";
import getLocale from '../../../utils/getLocales';

export default function Home(params: any){
    const lang = getLocale();
    return(
        <h1 params={lang.}>Hello word!</h1>
    )
}