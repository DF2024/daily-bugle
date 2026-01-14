import Hero from "../layouts/Hero"
import Articles from "../components/articles"
import Dividers from "../components/homeComponents/divider"
import WorldArticle from "../components/WorldArticle"
import Opinion from "../components/Opinion"
import Footer from "../layouts/Footer"


const HomePage = () => {

    return (
        <div className="mx-auto">
            <Hero/>
            <Articles/>
            <Dividers theme={"World"}/>
            <WorldArticle/>
            <Dividers theme={"Opinion"}/>
            <Opinion />
            <Footer/>
        </div>
        
    )
}
export default HomePage