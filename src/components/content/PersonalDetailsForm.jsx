import businessCard from "../../assets/business-card.png";

/* eslint-disable */
const PersonalDetailsForm = ({
  firstName,
  lastName,
  email,
  phone,
  age,
  hometown,
  about,
  skill,
  skills,
  linkedin,
  github,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAge,
  setHometown,
  setAbout,
  setSkill,
  handleAddSkill,
  handleDeleteSkill,
  setLinkedin,
  setGithub,
  handlePersonalDetailsSubmit,
  ageFocused,
  setAgeFocused,
  classes,
}) => {
  return (
    <form onSubmit={handlePersonalDetailsSubmit} className={classes.form}>
      <div className={classes.titleimg}>
        <h2>Personal Details </h2>
        <img src={businessCard} alt="business card" />
      </div>
      <label>Name:</label>
      <div className={classes.namesdiv}>
        <input
          className={`${classes.names} ${classes.input}`}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className={`${classes.names} ${classes.input}`}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <br />
      <label>Contact Details:</label>
      <div className={classes.namesdiv}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className={classes.input}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={classes.input}
        />
      </div>
      <br />
      <h3>About you:</h3>
      <input
        type={ageFocused ? "date" : "text"}
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        onFocus={() => setAgeFocused(true)}
        onBlur={() => setAgeFocused(false)}
        required
        className={classes.input}
      />
      <input
        type="text"
        placeholder="Hometown"
        value={hometown}
        onChange={(e) => setHometown(e.target.value)}
        required
        className={classes.input}
      />
      <textarea
        type="text"
        placeholder="A little about yourself"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        required
        className={classes.input}
      />
      <br />
      <div>
        <h3>Skills:</h3>
        <input
          type="text"
          placeholder="Type a skill"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          className={classes.skillinput}
        />
        <button type="submit" onClick={handleAddSkill}>
          Add
        </button>
      </div>
      <div className={classes.skills}>
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
            <button
              className={classes.closebutton}
              onClick={() => handleDeleteSkill(skill)}
            >
              x
            </button>
          </span>
        ))}
      </div>
      <br />
      <h3>Links:</h3>
      <input
        type="url"
        placeholder="LinkedIn"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        className={classes.input}
      />
      <input
        type="url"
        placeholder="Github"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        className={classes.input}
      />
      <button type="submit" className={classes.submitButton}>
        Update
      </button>
    </form>
  );
};

export default PersonalDetailsForm;
