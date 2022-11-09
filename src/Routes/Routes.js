import CardDetails from "../Components/Home/Services/CardDetails";
import Services from "../Components/Home/Services/Services";

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
            },
            {
                path:'/services',
                element: <Services></Services>,
            },
            {
                path:'/services/:id',
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element: <CardDetails></CardDetails>,
            }
        ]
    }
])

export default router;