import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/sign-in/SignIn';
// import SignUp from './pages/sign-un/SignUp';
import CardMenu from './common/components/CardMenu';
import AdminPanel from './pages/AdminPanel';
import Main from './pages/Main';
import About from './pages/About';
import Project from './pages/Project';
import RequireAuth from './common/HOCS/RequireAuth';
import Layout from './layout.jsx';
import FormProject from './pages/Form/FormProject';
import Warrior from './pages/Warrior';
import FormWarrior from './pages/Form/FormWarrior';
import Request from './pages/Request/Request';
import { AuthProvider } from './common/HOCS/AuthProvider';
import FormRequest from './pages/Form/FormRequest';
import SignUp from './pages/sign-up/SignUp';
import FormFeedback from './pages/Form/FormFeedback';
import Fond from './pages/Fond';
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />


            <Route path="main" element={<RequireAuth><Main /></RequireAuth>} />
            <Route path="about-us" element={<RequireAuth><About /></RequireAuth>} />
            <Route path="charity-project" element={<RequireAuth><Project /></RequireAuth>} />
            <Route path="warrior-rehabilitation" element={<RequireAuth><Warrior /></RequireAuth>} />
            <Route path="help-request" element={<RequireAuth><Request /></RequireAuth>} />
            <Route path="fond" element={<RequireAuth><Fond /></RequireAuth>} />

            <Route path="form-project" element={<RequireAuth><FormProject /></RequireAuth>} />
            <Route path="form-warrior" element={<RequireAuth><FormWarrior /></RequireAuth>} />
            <Route path="form-request-offer" element={<RequireAuth><FormRequest typeForm='offers' /></RequireAuth>} />
            <Route path="form-request-request" element={<RequireAuth><FormRequest typeForm='request' /></RequireAuth>} />
            <Route path="form-feedback" element={<RequireAuth><FormFeedback /></RequireAuth>} />


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
