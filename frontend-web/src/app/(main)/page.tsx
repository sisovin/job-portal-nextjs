import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Job Portal</h1>
        <p>Your dream job is just a click away.</p>
      </header>
      <section className={styles.banner}>
        <Image
          src="/assets/images/banner.jpg"
          alt="Job Portal Banner"
          width={1200}
          height={400}
        />
      </section>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Find Jobs</h2>
          <p>Search and apply for jobs that match your skills.</p>
        </div>
        <div className={styles.feature}>
          <h2>Post Jobs</h2>
          <p>Employers can post job listings to find the best candidates.</p>
        </div>
        <div className={styles.feature}>
          <h2>Get Hired</h2>
          <p>Connect with top companies and get hired quickly.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
