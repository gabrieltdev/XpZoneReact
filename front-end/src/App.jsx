import { RouterProvider } from 'react-router-dom'
import { getRouter } from './routes/Routes.jsx'
import { LanguageProvider } from './context/context-language/LanguageProvider.jsx';
import { UserProvider } from './context/user-context/UserProvider.jsx'

function App() {

  const router = getRouter();

  return (
    <LanguageProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </LanguageProvider>
  )
}

export default App