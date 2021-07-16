import React from 'react';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
          <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
          </div>
          <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="Johndoe@gmail.com" />
          </div>
          <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
              <label>Phone</label>
              <input type="text" placeholder="+250 788303000" />
          </div>
          <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder="Kigali | Rwanda" />
          </div>
          <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
              <input type="radio" name="Gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="Gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="Gender" id="other" value="other" />
              <label htmlFor="male">Other</label>
              </div>
          </div>
          <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
          </div>
          <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
