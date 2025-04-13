import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import JobCard from '../../components/JobCard';
import styles from '../../styles/Jobs.module.scss';

const JobListingPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Job Listings</h1>
        <p>Find your next job opportunity.</p>
      </header>
      <Tabs defaultActiveKey="all" id="job-listings-tabs" className="mb-3">
        <Tab eventKey="all" title="All Jobs">
          <div className={styles.jobList}>
            {/* Render JobCard components for all jobs */}
            <JobCard title="Software Engineer" company="Tech Corp" location="New York, NY" />
            <JobCard title="Product Manager" company="Innovate Ltd" location="San Francisco, CA" />
            <JobCard title="UX Designer" company="Design Studio" location="Austin, TX" />
          </div>
        </Tab>
        <Tab eventKey="remote" title="Remote Jobs">
          <div className={styles.jobList}>
            {/* Render JobCard components for remote jobs */}
            <JobCard title="Frontend Developer" company="Remote Inc" location="Remote" />
            <JobCard title="Data Scientist" company="DataWorks" location="Remote" />
          </div>
        </Tab>
        <Tab eventKey="fulltime" title="Full-time Jobs">
          <div className={styles.jobList}>
            {/* Render JobCard components for full-time jobs */}
            <JobCard title="Backend Developer" company="Tech Solutions" location="Chicago, IL" />
            <JobCard title="Marketing Specialist" company="MarketPro" location="Boston, MA" />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default JobListingPage;
