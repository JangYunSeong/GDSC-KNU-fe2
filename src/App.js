import React from 'react';
import GlobalStyle from './globalStyle';
import Main from './screen/Main';
import SettingLayout from './component/setting/SettingLayout';
import Edit from './component/setting/Edit';
import Password from './component/setting/Password';
import ManageAccess from './component/setting/ManageAccess';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/setting/edit' element={<SettingLayout><Edit/></SettingLayout>}></Route>
        <Route path='/setting/password' element={<SettingLayout><Password/></SettingLayout>}></Route>
        <Route path='/setting/manage_access' element={<SettingLayout><ManageAccess/></SettingLayout>}></Route>
        <Route path='/setting/emails' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/push' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/contact_history' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/privacy_and_security' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/login_activity' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/emails_sent' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/help' element={<SettingLayout></SettingLayout>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
