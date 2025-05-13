// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import ContactsPage from "./pages/ContactsPage";
// import React from "react";
// import Layout from "./components/Layout/Layout";
// import { refreshThunk } from "./redux/auth/operations";
// import { selectIsRefreshing } from "./redux/auth/selectors";
// import PrivateRoute from "./components/PrivateRoute";
// import RestrictedRoute from "./components/RestrictedRoute";

// function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);
//   useEffect(() => {
//     dispatch(refreshThunk());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <h2>Loading...</h2>
//   ) : (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/contacts"
//             element={
//               <PrivateRoute>
//                 <ContactsPage />
//               </PrivateRoute>
//             }
//           />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
//           }
//         />
//         <Route path="/register" element={<RegistrationPage />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomePage";
import RestrictedRoute from "./components/RestrictedRoute";
import Register from "./pages/RegistrationPage";
import Login from "./pages/LoginPage";
import Contacts from "./pages/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFoundPage";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
