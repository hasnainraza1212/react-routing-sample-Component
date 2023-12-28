import AppRoutes from './AppRoutes';
import { AuthProvider } from './assets/Context/UseAuth';
function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
