import { getTranslation } from '../../../locales/utils/getTranslation';
import '../../styles/global.scss';
import Home from './home/page';

interface pageProps {
  params: {
    lang: string;
  }
}
async function Page({params}: pageProps) {
  return  <Home params={params}/>
}

export default Page;