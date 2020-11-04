import React from 'react';
import { name, jobTitle, summary } from '../../helpers/data';
import Contacts from '../Contacts';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<div className={styles.name}>{name}</div>
			<div className={styles.additionalInfo}>
				<div className={styles.jobTitle}>{jobTitle}</div>
				<Contacts />
				<div className={styles.summary}>
					{
						summary.map((line) => (<p key={line} className={styles.summaryLine}>{line}</p>))
					}
				</div>
			</div>
		</header>
	);
};

export default Header;
