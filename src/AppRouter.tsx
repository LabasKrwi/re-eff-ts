import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './router/routes'
import { useUnit } from 'effector-react'
import { $isAuth } from './generalstore/store'

const AppRouter = () => {
   const isAuth = useUnit($isAuth);
  return (
    isAuth 
    ?
    <Routes>
        {privateRoutes.map(route =>
            <Route key={route.path} Component={route.Element} path={route.path}/>
        )}
    <Route path="*" element={ <Navigate to="/posts" replace />}></Route>
    </Routes>
    
    :
    <Routes>
        {publicRoutes.map(route =>
            <Route key={route.path} Component={route.Element} path={route.path}/>
        )}
    <Route path="*" element={ <Navigate to="/login" replace />}></Route>
    </Routes>
    
  )
}

export default AppRouter