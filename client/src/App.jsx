import {Routes, Route} from 'react-router-dom'
import { AdminCreate, AdminLogin, Create, CreatePost, Dashboard, Explore, Home, Login, PinDetail, Profile, ServerMessage, SignUp } from './components'
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
        {/* //Admin */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/create' element={<AdminCreate />} />
        <Route path='/admin/create/servermessage' element={<ServerMessage />} />
        <Route path='/admin/create/post' element={<CreatePost />} />
      </Routes>
    </div>
  )
}

export default App
