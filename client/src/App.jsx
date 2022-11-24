import {Routes, Route} from 'react-router-dom'
import { Create, Explore, Home, Login, PinDetail, Profile, SignUp } from './components'
function App() {

  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/post' element={<Create />}/>
        <Route path='/art/:id' element={<PinDetail />} />
        <Route path='/profile/:name' element={<Profile />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </div>
  )
}

export default App
