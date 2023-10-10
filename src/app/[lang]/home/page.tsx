import React from "react";
import { getTranslation } from "../../../../locales/utils/getTranslation";
import NavBar from "@/components/NavBar";
import '../../../styles/global.scss';
 async function Home(params: any){
    const lang = await getTranslation(params.lang);
    return(
        <NavBar />
    )
}
export default Home;