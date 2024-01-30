// login screen for username and password
import React from 'react';
import { useRouter } from 'expo-router'; 

const login = () => {
    const router = useRouter(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'fitness' && password === 'fitness') {
            router.push('welcome');             
        } else {
            // Show an alert if email or password is incorrect
            Alert.alert('Invalid Credentials', 'Please enter email and password as "fitness".');
        }
    };

    function submit() {
        // Get the values from the input fields
        var username = document.querySelector('.user').value;
        var password = document.querySelector('.password').value;
        handleLogin(username, password)
    }

    return(
        <div className="login-container">
            <h1>Login</h1>
                <div class name = 'input-box'>
                    <input type = "username"
                    placeholder='Enter Username'/>
                </div>

                <div class name = 'input-box'>
                    <input type = "password"
                    placeholder='Enter Password'
                 />
                </div>

                <button className = "btn-submit" type="submit" onClick={this.submit}>Login</button>
        </div>
    )
}

