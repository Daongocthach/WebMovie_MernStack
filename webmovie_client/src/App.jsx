import RouterUrl from './routers/routes'
import { UserProvider } from './pages/Users/Context/UserContext'

function App() {
  return (
    <UserProvider>
      <RouterUrl />
    </UserProvider>
  )
}

export default App
