import resume from "../../assets/resume.png";

/* eslint-disable */
const WorkHistoryForm = ({
  jobname,
  company,
  startDate,
  endDate,
  jobDescription,
  currentlyEmployed,
  jobs,
  setJobName,
  setCompany,
  setStartDate,
  setEndDate,
  setJobDescription,
  handleCurrentlyEmployedChange,
  handleAddJob,
  handleDeleteJob,
  handleWorkHistorySubmit,
  classes,
}) => {
  return (
    <form onSubmit={handleWorkHistorySubmit} className={classes.form}>
      <div className={classes.titleimg}>
        <h2>Work History</h2>
        <img src={resume} alt="resume" />
      </div>
      <label>Job Details:</label>
      <div className={classes.namesdiv}>
        <input
          className={`${classes.names} ${classes.input}`}
          type="text"
          placeholder="Job Title"
          value={jobname}
          onChange={(e) => setJobName(e.target.value)}
          required
        />
        <input
          className={`${classes.names} ${classes.input}`}
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <br />
      <label>Start and End Date:</label>
      <div className={classes.namesdiv}>
        <input
          type="date"
          value={startDate}
          placeholder="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
          required
          className={classes.input}
        />
        <div className={classes.namesdiv}>
          <label className={classes.checkboxLabel}>
            <input
              type="checkbox"
              checked={currentlyEmployed}
              onChange={handleCurrentlyEmployedChange}
              className={classes.checkboxInput}
            />
            Current
          </label>

          {!currentlyEmployed ? (
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className={classes.input}
            />
          ) : (
            <input
              type="date"
              placeholder="End Date"
              className={classes.disableEndDate}
              disabled
            />
          )}
        </div>
      </div>
      <br />
      <h3>About The Job:</h3>
      <textarea
        type="text"
        placeholder="A little about the Job, your responsibilities, and what skills you learned"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        required
        className={classes.input}
      />
      <br />
      <button
        type="button"
        onClick={handleAddJob}
        className={classes.submitButton}
      >
        Add Job
      </button>
      <div className={classes.jobs}>
        {jobs === undefined ? (
          <p>No jobs yet.</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index}>
              <span>
                {job.job} at {job.company}
                <button
                  className={classes.closebutton}
                  onClick={() => handleDeleteJob(index)}
                >
                  x
                </button>
              </span>
            </div>
          ))
        )}
      </div>
    </form>
  );
};

export default WorkHistoryForm;
