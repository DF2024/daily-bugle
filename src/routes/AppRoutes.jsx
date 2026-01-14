import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../layouts/Navbar'
import HistoryPage from '../pages/HistoryPage'
import DetailsPage from '../pages/DetailsPage'

const AppRoutes = () => {
    return(

            <Routes>
                <Route element={<Navbar/>}>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/history' element={<HistoryPage/>}/>
                    <Route path='/details' element={<DetailsPage/>}/>
                </Route>
            </Routes>

    )
}

export default AppRoutes