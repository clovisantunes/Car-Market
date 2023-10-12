import React from "react";
import { getTranslation } from "../../../../locales/utils/getTranslation";
import NavBar from "@/components/NavBar";
import '../../../styles/global.scss';
interface HomeProps {
    params: {
        lang: string;
      }
}
 async function Home({params}: HomeProps){
    
    return(
        <NavBar params={params}/>
    )
}
export default Home;