import { publicRoutes } from './routers/routes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout/DefaultLayout'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element ={
                  <DefaultLayout>
                    <Page/>
                  </DefaultLayout>
                }
              />
            )
          })}

        </Routes>
      </Router>
    </div>
  )
}

export default App
