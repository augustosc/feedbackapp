import {BrowserRouter as Router,Route,Routes/*,NavLink*/} from 'react-router-dom'
// import { useState } from "react"
// import Card from './shared/Card'

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'

import { FeedbackProvider } from './context/FeedbackContext'

import AboutPage from './pages/AboutPage'

// import FeedbackData from "./data/FeedbackData"


function App() {

    

    // const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <FeedbackProvider>
            <Router>
                <Header />

                <div className="container">
                    <Routes>
                        <Route path='/' element={
                            <>
                                <FeedbackForm /*handleAdd={addFeedback}*//>
                                <FeedbackStats /*feedback ={feedback}*/ />
                                <FeedbackList /*feedback ={feedback} handleDelete={deleteFeedback}*//>
                                
                            </>
                        }
                        ></Route>
                    
                        <Route path='/about' element={<AboutPage />} />
                        {/* <Route path='/post/*' element={<Post />} /> */}
                        {/* <Route path='/post/:id' element={<Post />} />
                        <Route path='/post/:id/:name' element={<Post />} /> */}
                    </Routes>

                    {/* <Card>
                        <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                        <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                    </Card> */}
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App