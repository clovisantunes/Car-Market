import React from "react";
import { getTranslation } from "../../../../locales/utils/getTranslation";
import NavBar from "@/components/NavBar";

 async function Home(params: any){
    const lang = await getTranslation(params.lang);
    return(
        <NavBar />
    )
}
export default Home;