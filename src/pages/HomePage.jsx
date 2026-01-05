import Hero from "../layouts/Hero"
import hero1 from "../assets/images/baxter.jpg"
import hero3 from "../assets/images/spidermanW.jpg"
import Articles from "../components/articles"
import Dividers from "../components/divider"
import WorldArticle from "../components/WorldArticle"
import Opinion from "../components/Opinion"
import Footer from "../layouts/Footer"


const HomePage = () => {
    const sliderImages = [hero1, hero3]
    return (
        <div className="mx-auto">
            <Hero images={sliderImages}/>

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