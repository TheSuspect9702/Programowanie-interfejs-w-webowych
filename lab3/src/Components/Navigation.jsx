import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.svg';
import { googleLogin, registerWithEmailPassword, loginWithEmailPassword } from '../data/authService';
import Modal from '../Components/Modal';

function Navigation() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGoogleLogin = () => {
            googleLogin()
              .then(({ user }) => {
                console.log('Logged in user:', user);
                setIsLoggedIn(true);
                setUser(user);
              }).catch(error => {
                console.error('Login failed:', error);
              });
    };

    const handleEmailPasswordAuth = (type) => {
        const action = type === 'login' ? loginWithEmailPassword : registerWithEmailPassword;
        action(email, password).then(user => {
            console.log('Success:', user);
            setIsModalOpen(false); 
            setIsLoggedIn(true);
            setUser(user);
        }).catch(error => {
            console.error('Authentication failed:', error);
        });
       
    };

    return (
        <nav className="fixed-navigation">
            <img className="logo" src={Logo} alt="Logo"/>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse-hotels">Find offers</Link></li>
                <li><Link to="/hotel-page-editable">Add new offers</Link></li> {/* Do zrobienia/przepisania z lab1 */}
                <li><Link to="/my-offers">My offers</Link></li>
                <li><Link to="/favorite-offers">Favorites</Link></li>
            </ul>
            {isLoggedIn ? (
                <button className='button primary' onClick={() => {
                    setIsLoggedIn(false);
                    setUser(null);
                }}>Log Out</button>
            ) : (
                <>
                    <button className='button primary' onClick={handleGoogleLogin}>Login with Google</button>
                    <button className='button primary' onClick={() => setIsModalOpen(true)}>Login with Email</button>
                </>
            )}
                <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
                    <h2>Login/Register</h2>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <button className="button primary" onClick={() => handleEmailPasswordAuth('login')}>Login</button>
                        <button className="button primary" onClick={() => handleEmailPasswordAuth('register')}>Register</button>
                    </div>
                </Modal>
            </nav>
    );
}

export default Navigation;
