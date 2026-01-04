import Hero from "../layouts/Hero"
import hero1 from "../assets/images/baxter.jpg"

import hero3 from "../assets/images/spidermanW.jpg"

const HomePage = () => {
    const sliderImages = [hero1, hero3]
    return (
        <div>
            <Hero images={sliderImages}/>
        </div>
    )
}
export default HomePage