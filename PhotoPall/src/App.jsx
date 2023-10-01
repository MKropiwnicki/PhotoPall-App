import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {LandingPage} from "./Components/LandingPage.jsx";
import {ProtectedRoute} from "./Components/ProtectedRoute.jsx";
import {Dashboard} from "./Components/Dashboard.jsx";

export const App = () => {
    return (
            <AuthContextProvider>
              <Router>
                  <Routes>
                      <Route path='/' element={<LandingPage/>} />
                      <Route
                          path='/dashboard'
                          element={
                              <ProtectedRoute>
                                  <Dashboard />
                              </ProtectedRoute>
                          }
                      />
                  </Routes>
              </Router>
            </AuthContextProvider>

    )
}

