import React from "react";
import { getTranslation } from "../../../../locales/utils/getTranslation";

 async function Home(params: any){
    const lang = await getTranslation(params.lang);
    return(
        <h1>{lang.hello}</h1>
    )
}
export default Home;