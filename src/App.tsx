import { routerPath } from '@config/router/path';
import './App.less';
import HomePage from '@pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import PlayReactFlow from '@pages/PlayReactFlow';
import 'reactflow/dist/style.css';
import AppearLayout from '@layouts/AppearLayout';
import AuthPage from '@pages/auth';
import PrivateLayout from '@layouts/PrivateLayout';
import NotFound from '@pages/NotFound';
import Dashboard from '@pages/Logged/Dashboard';

function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<MainLayout />}>
               <Route element={<HomePage />} path={routerPath.HOME} />
            </Route>
            <Route element={<PrivateLayout />}>
               <Route element={<Dashboard />} path={routerPath.DASHBOARD} />
               <Route element={<PlayReactFlow />} path={routerPath.PLAY} />
               <Route element={<AppearLayout />}>
                  <Route element={<AuthPage />} path={routerPath.AUTH} />
               </Route>
            </Route>
            <Route path={routerPath.ANY} element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
