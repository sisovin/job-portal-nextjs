import React from 'react';
import styles from '../styles/JobCard.module.scss';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.company}>{company}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

export default JobCard;
