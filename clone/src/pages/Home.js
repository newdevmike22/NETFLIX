import Navbar from "../comps/Navbar";
import Featured from "../comps/Featured";
import List from "../comps/List";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home;