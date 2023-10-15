import { routerPath } from '@config/router/path';
import './App.less';
import HomePage from '@pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/mainLayout';
import Login from '@pages/auth/login';
import Register from '@pages/auth/register';
import PlayReactFlow from '@pages/playReactFlow';
import 'reactflow/dist/style.css';

function App() {
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route element={<MainLayout />}>
               <Route element={<HomePage />} path={routerPath.HOME} />
            </Route>
            <Route>
               <Route element={<PlayReactFlow />} path={routerPath.PLAY} />

               <Route element={<Login />} path={routerPath.LOGIN} />
               <Route element={<Register />} path={routerPath.REGISTER} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
