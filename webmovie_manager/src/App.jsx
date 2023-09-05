import RouterUrl from './routers/routes'
import { PageProvider } from './routers/PageContext'
function App() {
  return (
    <PageProvider>
      <RouterUrl />
    </PageProvider>
  )
}

export default App
