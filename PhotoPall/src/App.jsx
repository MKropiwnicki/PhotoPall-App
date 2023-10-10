import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {LandingPage} from "./Components/LandingPage.jsx";
import {ProtectedRoute} from "./Components/ProtectedRoute.jsx";
import {Dashboard} from "./Components/Dashboard.jsx";
import {AddGear} from "./Components/AddGear.jsx";
import {AddEvent} from "./Components/AddEvent.jsx";
import {GearCollection} from "./Components/GearCollection.jsx";

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
                      <Route
                          path='/add-gear'
                          element={
                              <ProtectedRoute>
                                  <AddGear />
                              </ProtectedRoute>
                          }
                      />
                      <Route
                          path='/gear-collection'
                          element={
                              <ProtectedRoute>
                                  <GearCollection />
                              </ProtectedRoute>
                          }
                      />

                      <Route
                          path='/add-event'
                          element={
                              <ProtectedRoute>
                                  <AddEvent />
                              </ProtectedRoute>
                          }
                      />

                      <Route
                          path='/events'
                          element={
                              <ProtectedRoute>
                                  <AddGear />
                              </ProtectedRoute>
                          }
                      />
                  </Routes>
              </Router>
            </AuthContextProvider>

    )
}

