import { Link } from 'react-router-dom';

function Home() {
    const containerStyle = {
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701090936682-40a2be2a9dd2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        color: 'white',
    };

    const headingStyle = {
        marginBottom: '20px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#800080',
        color: 'white',
        padding: '12px 24px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}>
                <h1 style={headingStyle}>Welcome to Cafeteria Ordering System</h1>
                <p>Please use the buttons below to navigate the website</p>
                <div style={buttonContainerStyle}>
                    <Link to="/menu" style={buttonStyle}>View Menu</Link>
                    <Link to="/order-history" style={buttonStyle}>Order History</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;

