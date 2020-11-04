import React from 'react';
import Header from '../Header';
import Skills from '../Skills';
import Languages from '../Languages';
import WorkHistory from '../WorkHistory';
import Education from '../Education';
import styles from './Main.module.scss';

const Main = () => {
	return (
		<main className={styles.content}>
			<Header />
			<div className={styles.columns}>
					<Skills />
					<Languages />
			</div>
			<WorkHistory />
			<Education />
		</main>
	);
};

export default Main;
