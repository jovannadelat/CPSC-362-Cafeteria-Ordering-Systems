import { Link } from 'react-router-dom';

function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    };

    const headingStyle = {
        marginBottom: '20px',
        color: '#333',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
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

    const buttonHoverStyle = {
        backgroundColor: '#520052',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Welcome to Cafeteria Ordering System</h1>
            <p style={{ marginBottom: '40px', color: '#666' }}>
                Please use the buttons below to navigate the website
            </p>

            <div style={buttonContainerStyle}>
                <Link to="/menu" style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
                    View Menu
                </Link>
                <Link to="/order-history" style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
                    Order History
                </Link>
            </div>
        </div>
    );
}

export default Home;
