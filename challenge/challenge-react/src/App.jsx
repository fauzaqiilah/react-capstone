import { useState } from 'react'
import './App.css'
import LayoutComponent from './component/layouts/LayoutComponent'
import QuotesComponent from './component/layouts/quotes/QuotesComponent'
import Route from './router/Router'
import './component/layouts/global.css'
import designer from '../src/component/layouts/image/designer.png'


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
