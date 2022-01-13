import React from 'react'
import Main from './component/main'
import Message from './component/message/Message'
import StoryModal from './component/activeStatus/StoryModal'
import SettingLayout from './component/setting/SettingLayout'
import Edit from './component/setting/Edit'
import Password from './component/setting/Password'
import ManageAccess from './component/setting/ManageAccess'
import Emails from './component/setting/Emails';
import Push from './component/setting/Push';
import ContactHistory from './component/setting/contactHistory';
import PrivacyAndSecurity from './component/setting/PrivacyAndSecurity';
import LoginActivity from './component/setting/LoginActivity';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/stories/*' element={<StoryModal></StoryModal>}/>
        <Route path='/message' element = {<Message></Message>}/>
        <Route path='/setting/edit' element={<SettingLayout><Edit/></SettingLayout>}></Route>
        <Route path='/setting/password' element={<SettingLayout><Password/></SettingLayout>}></Route>
        <Route path='/setting/manage_access' element={<SettingLayout><ManageAccess/></SettingLayout>}></Route>
        <Route path='/setting/emails' element={<SettingLayout><Emails/></SettingLayout>}></Route>
        <Route path='/setting/push' element={<SettingLayout><Push/></SettingLayout>}></Route>
        <Route path='/setting/contact_history' element={<SettingLayout><ContactHistory/></SettingLayout>}></Route>
        <Route path='/setting/privacy_and_security' element={<SettingLayout><PrivacyAndSecurity/></SettingLayout>}></Route>
        <Route path='/setting/login_activity' element={<SettingLayout><LoginActivity/></SettingLayout>}></Route>
        <Route path='/setting/emails_sent' element={<SettingLayout></SettingLayout>}></Route>
        <Route path='/setting/help' element={<SettingLayout></SettingLayout>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
