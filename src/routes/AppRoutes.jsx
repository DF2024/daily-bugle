import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../layouts/Navbar'

const AppRoutes = () => {
    return(

            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<HomePage/>}/>
                </Route>
            </Routes>

    )
}

export default AppRoutes