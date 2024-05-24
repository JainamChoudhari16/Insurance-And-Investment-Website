import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import { useSelector } from 'react-redux';
import AdminLife from '../components/services/AdminLife'
import AdminHome from '../components/services/AdminHome'
import AdminHealth from '../components/services/AdminHealth'
import AdminUsers from '../components/services/AdminUsers';

export default function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {currentUser.roles[0].name === 'ROLE_ADMIN' && (
        <>
        {tab === 'life' &&  <AdminLife/>}
        {tab === 'health' && <AdminHealth/>}
        {tab === 'home' && <AdminHome/>}
        {tab === 'users' && <AdminUsers/>}
        </>
      )}      
    </div>
  );
}