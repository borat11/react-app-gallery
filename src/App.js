
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login';
import Signin from './Authentication/Signin';
import AuthProvider from './ContextApi/ContextAuth';
import Main from './Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Nature from './components/Nature';
import Navbar from './components/Navbar';
import PhotoItem from './components/PhotoItem';
import Reviews from './components/Reviews';
import Space from './components/Space';
import Tech from './components/Tech';
import Terms from './components/TermsConditions';

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Main></Main>,
    children:[
      {path:"/",element:<PrivateRoute><PhotoItem /></PrivateRoute>},
      {path:"/login",element:<Login></Login>},
      {path:"/terms",element:<Terms></Terms>},
      {path:"/space",element:<Space />},
      {path:"/nature",element:<Nature />},
      {path:"/tech",element:<Tech />},
      {path:"/signin",element:<Signin/>},
      {path:"/navbar",element:<Navbar/>},
      {path:"/review",element:<Reviews></Reviews>},
    ]
  }])
  return (
   <div>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
   </div>
  );
}

export default App;


//  <div className="App">
//       <>
//          <AuthProvider>    
//           <BrowserRouter>
//           <Navbar />
     
//              <Routes>
//             <Route exact path="/" element={<PhotoItem />}></Route>
//             <Route exact path="/feedback" element={<Feedback />}></Route>
//             <Route exact path="/login" element={<Login></Login>}></Route>
//             <Route exact path="/terms" element={<Terms></Terms>}></Route>
//             <Route exact path="/space" element={<Space />}></Route>
//             <Route exact path="/nature" element={<Nature />}></Route>
//             <Route exact path="/tech" element={<Tech />}></Route>
//             <Route exact path="/signin" element={<Signin/>}></Route>
//           </Routes>
          
         
//         </BrowserRouter>
//         </AuthProvider>
//       </>
//     </div>






// import Feedback from 'react-bootstrap/esm/Feedback';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './App.css';
// import Login from './Authentication/Login';
// import Signin from './Authentication/Signin';
// import AuthProvider from './ContextApi/ContextAuth';
// import Main from './Main';
// import Nature from './components/Nature';
// import PhotoItem from './components/PhotoItem';
// import Space from './components/Space';
// import Tech from './components/Tech';
// import Terms from './components/TermsConditions';

// function App() {
//   const router = createBrowserRouter([{
//     path:"/",
//     element:<Main></Main>,
//     children:[
//       {path:"/",element:<PhotoItem />},
//       {path:"/feedback",element:<Feedback />},
//       {path:"/login",element:<Login></Login>},
//       {path:"/terms",element:<Terms></Terms>},
//       {path:"/space",element:<Space />},
//       {path:"/nature",element:<Nature />},
//       {path:"/tech",element:<Tech />},
//       {path:"/signin",element:<Signin/>},
//     ]
//   }])
//   return (
//    <div>
//     <AuthProvider>
//       <RouterProvider router={router}></RouterProvider>
//     </AuthProvider>
    
//    </div>
//   );
// }

// export default App;