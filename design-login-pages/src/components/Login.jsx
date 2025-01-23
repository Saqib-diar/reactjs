function Login() {
    return (
        <>
            <div className="container">
                <div className="left-side">
                    <div className="title-boardme">
                        <h3>Board Me</h3>
                    </div>
                    <div className="login-content">
                        <h3>Already signed up?</h3>
                        <p>All users on myspace will know that there</p>
                        <button>LOG IN</button>
                    </div>
                </div>
                <div className="middle">
                </div>
                <div className="right-side">
                    <h1>Sign Up for an Account</h1>
                    <p>let's get you all set up</p>
                    <div className="input-fields">
                        <div>
                            <input type="text" placeholder="Your first name" className="first-input" />
                            <input type="text" placeholder="Your last name" />
                        </div>
                        <input type="text" placeholder="Enter Your last name" />
                        <input type="text" placeholder="Your a strong password" />
                        <div className="checkbox-p">
                            <input type="checkbox" />
                            <p>I accept BoardMe's <span><a href="">Terms & Condition</a></span></p>
                        </div>
                        <button className="button">SIGNUP</button>
                    </div>
                        <p>Or sign up using</p>
                </div>
            </div>
        </>
    )
}

export default Login;