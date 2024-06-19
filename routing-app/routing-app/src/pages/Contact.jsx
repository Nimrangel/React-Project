import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `First Name: ${firstName} \n Last Name: ${lastName} \n Email: ${email}`
    alert(message)
    setEmail("");
    setFirstName("");
    setlastName("");
  };
  return (
    <div className="contactWrapper">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
