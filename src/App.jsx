// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import HomePage from './HomePage';
// import ProductPage from './ProductPage';
// import PrivateRoute from './PrivateRoute';

// function App() {
//     const [token, setToken] = useState(null);

//     if (!token) {
//         return <Login setToken={setToken} />;
//     }

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<Login setToken={setToken} />} />
//                 <Route path="/product" element={<PrivateRoute element={ProductPage} />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
    


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import ProductPage from './ProductPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
