import AddService from "../Components/AddService/AddService";
import Contact from "../Components/Home/Contact/Contact";
import CardDetails from "../Components/Home/Services/CardDetails";
import Services from "../Components/Home/Services/Services";
import MyAllReview from "../Components/MyReviews/MyAllReview";
import UpdateReview from "../Components/MyReviews/UpdateReview";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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
                element: <Blogs></Blogs>,
                loader: ()=>fetch('https://loserver.vercel.app/blogs')
            },
            {
                path:'/services',
                element: <Services></Services>,
            },
            {
                path:'/services/:id',
                loader: ({params})=>fetch(`https://loserver.vercel.app/services/${params.id}`),
                element: <CardDetails></CardDetails>,
            },
            {
                path:'/addservices',
                element: <AddService></AddService>,
            },
            {
                path:'/contacts',
                element: <Contact></Contact>,
            },
            {
                path:'/myallreviews',
                element: <PrivateRoute><MyAllReview></MyAllReview></PrivateRoute>,
            },
            {
                path:'/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params})=>fetch(`https://loserver.vercel.app/sreviews/${params.id}`)
            }
        ]
    }
])

export default router;