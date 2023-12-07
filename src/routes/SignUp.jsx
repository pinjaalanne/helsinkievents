import "./Account.css";

function SignUp() {
  return (
    <>
      <div className="container">
        <div className="formwrap">
          <h3>Create account</h3>

          <form>
            <div className="form-group">
              <label htmlFor="firstname">First name:</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last name:</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password1">Password:</label>
              <input type="password" name="password1" id="password1" />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm password:</label>
              <input type="password" name="password2" id="password2" />
            </div>
            <button type="submit">Sign up</button>
          </form>

          <p className="bottom-text">
            By clicking the Sign up button, you agree to our
            <a href="a"> Terms & Conditions</a> and{" "}
            <a href="a">Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
