import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Banner from './Banner'
import HugeText from './HugeText'
import AboutSticky from './AboutSticky'
import BePartOfUs from './BePartOfUs'
import OurCollection from './OurCollection'
import SearchHeader from '@/components/SearchHeader'


function Home() {
  return (
    <div>
       <Header/>
       <Banner/>
       <HugeText/>
       <AboutSticky/>
       <BePartOfUs/>
       <OurCollection/>
       <Footer/>

      </div>
  )
}

export default Home