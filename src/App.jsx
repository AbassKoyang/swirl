import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import UpdatePassword from "./pages/UpdatePassword"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="onboarding/signup" element={<SignUp />} />
        <Route path="onboarding/login" element={<Login />} />
        <Route path="onboarding/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="onboarding/update-password" element={<UpdatePassword />} />
        <Route path="feed" element={<Home />} />
      </Route>
    )
  )

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
