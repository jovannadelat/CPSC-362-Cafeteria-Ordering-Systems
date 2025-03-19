import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Cafeteria Ordering System</h1>
            <h1>Please use the buttons to navigate the website</h1>

            {/* Buttons to navigate user through pages */}
            <form>
                <button>
                    <Link to="/menu">View Menu</Link>
                </button>
                <br />
                <button>
                    <Link to="/order-history">Order History</Link> 
                </button>
            </form>
        </div>
    );
}

export default Home;