import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics'
import Statistics from './components/Statistics/Statistics'
import Blogs from './components/Blogs/Blogs'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Topics></Topics>,
        },
        {
          path: 'topics',
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
      ]
    },
    { path: '*', element: <div>404-Page not found</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
