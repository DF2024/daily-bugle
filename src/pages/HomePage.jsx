import Hero from "../layouts/Hero"
import hero1 from "../assets/images/baxter.jpg"
import hero3 from "../assets/images/spidermanW.jpg"
import Articles from "../components/articles"
import Dividers from "../components/divider"

const HomePage = () => {
    const sliderImages = [hero1, hero3]
    return (
        <div className="mx-auto max-w-[1442px] ">
            <Hero images={sliderImages}/>

            <Articles/>
            <Dividers theme={"World"}/>
        </div>
    )
}
export default HomePage