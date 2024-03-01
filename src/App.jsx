import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"

function App() {
  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="onboarding/signup" element={<SignUp />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
