import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import AddBook from './pages/admin/AddBook/AddBook';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import FixAccount from './pages/admin/FixAccount/FixAccount';
import ForgotAccount from './pages/admin/ForgotAccount/ForgotAccount';
import GantiEmail from './pages/admin/GantiEmail/GantiEmail';
import ListBox from './pages/admin/ListBox/ListBox';
import LoginAsAdmin from './pages/admin/Login/Login';
import MainPageAdmin from './pages/admin/MainPage/MainPageAdmin';
import RegisterAsAdmin from './pages/admin/Register/Register';
import FixAccountMember from './pages/member/FixAccount/FixAccount';


import ForgotAccountMember from './pages/member/ForgotAccount/ForgotAccount';
import Pengembalian from './pages/member/ListTransaction/Pengembalian/Pengembalian';
import Login from './pages/member/Login/Login';
import MainPage from './pages/member/MainPage/MainPage';
import Register from './pages/member/Register/Register';

function App() {

  return (
    
      <Router>
                <Switch>
                  {/* member */}
                <Route path="/" exact strict component={Login}/>
                <Route path="/registerMember" exact strict component={Register}/>
                <Route path="/Member/MainPage" exact strict  component={MainPage}/>
                <Route path="/Member/Dashboard" exact strict  component={MainPage}/>
                <Route path="/Member/FixAccount" exact strict component={FixAccountMember}/>
                <Route path="/Member/ForgotAccount" exact strict component={ForgotAccountMember}/>
                <Route path="/Member/DaftarPeminjaman" exact strict component={MainPage}/>
                <Route path="/Member/DaftarPengembalian" exact strict component={MainPage}/>
                <Route path="/Member/DaftarPerpanjangan" exact strict component={MainPage}/>
                
                {/* admin  */}

                {/* Auth */}
                <Route path="/Admin/Login" exact strict component={LoginAsAdmin}/>
                <Route path="/Admin/Register" exact strict component={RegisterAsAdmin}/>
                <Route path="/Admin/FixAccount" exact strict component={FixAccount}/>
                <Route path="/Admin/ForgotAccount" exact strict component={ForgotAccount}/>
                <Route path="/Admin/GantiEmail" exact strict component={GantiEmail}/>
                <Route path="/Admin/MainPage" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/Dashboard" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/Dropbox" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/RiwayatTransaksi" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DaftarAdmin" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DaftarPeminjaman" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DaftarPengembalian" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DaftarPerpanjangan" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/detail-box" exact strict  component={MainPageAdmin}/>
                <Route path="/history/peminjaman" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DaftarAnggota" exact strict  component={MainPageAdmin}/>

                {/* Books */}
                <Route path="/Admin/DaftarBuku" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/AddBook" exact strict  component={MainPageAdmin}/>
                <Route path="/Admin/DetailBook" exact strict  component={MainPageAdmin}/>
                
                </Switch>
            </Router>
  );
}

export default App;
