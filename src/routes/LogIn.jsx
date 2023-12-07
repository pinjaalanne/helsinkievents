import "./Account.css";

function LogIn() {
  return (
    <>
      <div className="container">
        <div className="formwrap">
          <h3>Welcome</h3>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password1">Password:</label>
              <input type="password" name="password1" id="password1" />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
