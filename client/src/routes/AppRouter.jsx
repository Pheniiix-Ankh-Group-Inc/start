import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Appointment from '../pages/Appointment';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="*" element={<div className="text-center p-10">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
