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
import NewsPage from './components/NewsPage/NewsPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import NewsArticlesLayout from './components/Layouts/NewsArticlesLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path='news' element={<NewsArticlesLayout />}>
        <Route index element={<NewsPage />} />
        <Route path=':id' element ={<ArticlePage />} />
      </Route>
      
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
