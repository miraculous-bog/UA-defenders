import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/sign-in/SignIn';
// import SignUp from './pages/sign-un/SignUp';
import CardMenu from './common/components/CardMenu';
import AdminPanel from './pages/AdminPanel';
import Main from './pages/Main';
import About from './pages/About';
import Form from './pages/Form';
import RequireAuth from './common/HOCS/RequireAuth';
import Layout from './layout.jsx';
import { AuthProvider } from './common/HOCS/AuthProvider';
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />

            <Route path="sign-in" element={<SignIn />} />
            <Route path="about-us" element={<About />} />

            <Route path="admin-panel" element={
              <RequireAuth>
                <AdminPanel />
              </RequireAuth>
            } />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
