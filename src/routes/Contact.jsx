function Contact() {
    return (
        <div className="container">
            <div className="formwrap">
                <h3>Contact us</h3>
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
                        <label htmlFor="message">Message:</label>
                        <input type="text" name="message" id="message" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact