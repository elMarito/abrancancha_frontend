import { Navigate, Route, Outlet } from 'react-router-dom';
import { useAuth } from '../context/appContext';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ autorization }) => {
  // const PrivateRoute = ({ ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);
  setIsAuth(useAuth(autorization));
  // let auth = true
  useEffect(
    ()=>console.log("setisAuth", isAuth)
    ,[]  )
  // console.log("pase x aca? isAuth",isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;

  // return (isAuth ? (<Route {...rest} />) : (<Navigate to="/login" />))
  return (<>{
    isAuth ? (
      <Route {...rest} />
    ) : (
      <Route path="/login" element={<Login />} />
    )
  }
  </>
  )
}
// <Route {...rest}>{auth ? <Component /> : <Navigate to="/login" />} </Route>
// <Route exact path="/" render={() => (
//     isAuth ? (
//       <Component />
//     ) : (
//       <Navigate to="/login" />
//     )
//   )} />

//   <Route         {...rest}
//   element={(props) => (
//     isAuth ? (
//       <Component {...props} />
//     ) : (
//       <Navigate to="/login" />
//     )
//   )}
// />


// <Route {...rest}

//     loader={async () => {
//         const user = await fake.getUser();
//         if (!user) {
//             // if you know you can't render the route, you can
//             // throw a redirect to stop executing code here,
//             // sending the user to a new route
//             throw redirect("/login");
// Navigate
//         }
//     }}
// />


export default PrivateRoute