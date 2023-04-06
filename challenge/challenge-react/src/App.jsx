import { useState } from 'react'
import './App.css'
import LayoutComponent from './component/layouts/LayoutComponent'
import QuotesComponent from './component/layouts/quotes/QuotesComponent'
import Kamis from './pages/kamis/Kamis'
import Route from './router/Router'
import './component/layouts/global.css'
import Home from './pages/home/home'
import Feature from './pages/feature/reactCaptone'


function App() {
  const [count, setCount] = useState(0)

  return (
    <LayoutComponent>
      <Route path='/quotes'>
        <QuotesComponent/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/feature'>
        <Feature/>
      </Route>
      <Route path='/kamis'>
        <Kamis/>
      </Route>

      </LayoutComponent>
  )
}

export default App
