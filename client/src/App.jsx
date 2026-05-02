import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import BuilderPage from './pages/BuilderPage'
import DashboardPage from './pages/DashboardPage'
import PublicFormPage from './pages/PublicFormPage'
import AuthPage from './pages/AuthPage'
import LandingPage from './pages/LandingPage'
import FormRoute from './pages/FormRoute'
import FormPreviewPage from './pages/FormPreviewPage'
import FormSuccessPage from './pages/FormSuccessPage'
import GlobalNavbar from './components/GlobalNavbar'

function ProtectedRoute({ children }) {
  const { token, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <main className="page centered-page">Loading your workspace...</main>
  }

  if (!token) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  return children
}

function HomeRoute() {
  const { token, loading } = useAuth()

  if (loading) {
    return <main className="page centered-page">Preparing FlowForm AI...</main>
  }

  return token ? <Navigate to="/workspace" replace /> : <LandingPage />
}

export default function App() {
  const { token, user, logout } = useAuth()

  return (
    <div className="app-shell">
      <GlobalNavbar />

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <BuilderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/forms/:slug/*" element={<FormRoute />}>
          <Route index element={<PublicFormPage />} />
          <Route path="preview" element={<FormPreviewPage />} />
          <Route path="success" element={<FormSuccessPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div className="app-watermark">PoweredBy - NxtMock</div>
    </div>
  )
}