import { useState } from 'react'
import './App.css'
import LayoutComponent from './component/layouts/LayoutComponent'
import QuotesComponent from './component/layouts/quotes/QuotesComponent'
import Route from './router/Router'
import aset1 from './image/aset1.jpg'
import './component/layouts/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LayoutComponent>
      <Route path='/quotes'>
        <QuotesComponent/>
      </Route>

      </LayoutComponent>
  )
}

export default App
