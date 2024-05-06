import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Heloow welcome to thr home page</p>

            <Link to="/users">Users</Link> <br/>
            <Link to="/product">Products</Link>
        </div> 
    )

}

export default Home;