import React from 'react';
import AppContainer from './components/AppContainer';

import { HomePage } from './pages/Home';
import { ServicePage } from './pages/Service';
import { LoginPage } from './pages/Login';
import { SignInPage } from './pages/SignIn';
import { Page404 } from './pages/Page404';
import { PartnerSchoolsPage } from './pages/PartnerSchools';
import { DegreePage } from './pages/Degree';
import { FormationPage } from './pages/Formation';
import { ServiceAdmin } from './pages/Admin/Service';
import { SchoolAdmin } from './pages/Admin/School';
import { FormationAdmin } from './pages/Admin/Formation';
import { DegreeAdmin } from './pages/Admin/Degree';

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Admin } from './pages/Admin';
function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/signin" element={<SignInPage/>}></Route>
            <Route path="/" element={<AppContainer />}>
               <Route index element={<HomePage />}></Route>
               <Route path="services" element={<ServicePage />}></Route>
               <Route path="schools" element={<PartnerSchoolsPage />}></Route>
               <Route path="degrees" element={<DegreePage />}></Route>
               <Route path="formations" element={<FormationPage />}></Route>
               <Route path="admin" element={<Admin />}>
                     <Route index  element={<ServiceAdmin />}></Route>
                     <Route index path="services" element={<ServiceAdmin />}></Route>
                     <Route index path="schools" element={<SchoolAdmin />}></Route>
                     <Route index path="degrees" element={<DegreeAdmin />}></Route>
                     <Route index path="formations" element={<FormationAdmin />}></Route>
               </Route>
            </Route>
            <Route path='*' element={<Page404/>}></Route>
         </Routes>
      </BrowserRouter>
  );
}
  {/* <AppContainer /> */}
export default App;
