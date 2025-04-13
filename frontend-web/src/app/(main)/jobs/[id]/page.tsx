import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/JobDetail.module.scss';

const JobDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock job data
  const job = {
    id,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York, NY',
    description: 'We are looking for a skilled software engineer to join our team.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
    ],
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{job.title}</h1>
        <p>{job.company} - {job.location}</p>
      </header>
      <section className={styles.description}>
        <h2>Job Description</h2>
        <p>{job.description}</p>
      </section>
      <section className={styles.requirements}>
        <h2>Requirements</h2>
        <ul>
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default JobDetailPage;
