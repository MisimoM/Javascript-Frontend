import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// Layouts
import RootLayout from './components/Layouts/RootLayout';
import NewsArticlesLayout from './components/Layouts/NewsArticlesLayout';

// Pages
import HomePage from './components/HomePage/HomePage'
import ContactPage from './components/ContactPage/ContactPage';
import NewsPage from './components/NewsPage/NewsPage';
import ArticlePage from './components/ArticlePage/ArticlePage';

// Css
import './App.css';

// Data
import { DataProvider } from './components/Global/DataContext';


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
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
