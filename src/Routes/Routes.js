const { createBrowserRouter } = require("react-router-dom");
const { default: Blogs } = require("../Components/Blogs/Blogs");
const { default: Home } = require("../Components/Home/Home/Home");
const { default: Login } = require("../Components/Login/Login");
const { default: Register } = require("../Components/Register/Register");
const { default: ErrorPage } = require("../Components/Shared/ErrorPage");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;