import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Footer from "./components/footer"
import MintComponent from "./components/mint-nft"
import ErrorPage from "./error-page"
import AboutPage from "./components/about"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MintComponent />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])

function Layout() {
  return (
    <div>
      <div id="root" className="root" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'rgb(19,19,19)',
      color: 'rgb(250,250,250)',
    }}>
      <div className="wrapper" style={{flexGrow:1, width:'100%', display:"flex"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  )
}


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
