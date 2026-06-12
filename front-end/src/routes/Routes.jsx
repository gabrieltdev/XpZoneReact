import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../pages/layouts/auth-layout/AuthLayout.jsx";
import { RoutePublic } from "../pages/layouts/route-public/RoutePublic.jsx";
import { AppLayout } from "../pages/layouts/app-layout/AppLayout.jsx";
import { LandingPage } from "../pages/public/landing-page/LandingPage.jsx";
import { Login } from "../pages/public/login/Login.jsx";
import { Register } from "../pages/public/register/Register.jsx";
import { Home } from "../pages/auth/home/Home.jsx";
import { Dashboard } from "../pages/auth/dashboard/Dashboard.jsx";
import { Search } from "../pages/auth/search/Search.jsx";
import { ProductProfile } from "../pages/auth/product-profile/ProductProfile.jsx";
import { Favorites } from "../pages/auth/favorites/Favorites.jsx";
import { Chat } from "../pages/auth/components/chat/Chat.jsx";
import { UserData } from "../pages/auth/user-data/UserData.jsx";
import { GameLibrary } from "../pages/auth/game-library/GameLibrary.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import { Highlights } from "../pages/auth/highlights/Highlights.jsx";
import { Navigate } from "react-router-dom";
import { Profile } from "../pages/auth/profile/Profile.jsx";

export const getRouter = (lang, setLang) =>
  createBrowserRouter([
    {
      path: "/",
      element: <RoutePublic lang={lang} setLang={setLang} />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "auth",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/app",
      element: (
        <ProtectedRoute>
          <AppLayout lang={lang} setLang={setLang} />
        </ProtectedRoute>
      ),
      children: [
        { index: true, 
          element: <Navigate to="/app/home" replace /> 
        },
        {
          path: "home",
          element: <Home />,
          children: [
            { index: true, 
              element: <Navigate to="/app/home/highlights" replace /> 
            },
            {
              path: "highlights",
              element: <Highlights />,
            },
            {
              path: "search",
              element: <Search />,
            },
          ],
        },
        {
          path: "product-profile",
          element: <ProductProfile />,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            { index: true, 
              element: <Navigate to="/app/profile/dashboard" replace /> 
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "library",
              element: <GameLibrary />,
            },
            {
              path: "favorites",
              element: <Favorites />,
            },
            {
              path: "chat",
              element: <Chat />,
            },
            {
              path: "user-data",
              element: <UserData />,
            },
          ],
        },
      ],
    },
  ]);
