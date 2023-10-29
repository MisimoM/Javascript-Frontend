import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import './App.css';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage'
import RootLayout from './components/Layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='contact' element={<ContactPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
