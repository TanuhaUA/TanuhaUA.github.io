import React from 'react';
import styles from './InfoBlock.module.scss';

const InfoBlock = ({ icon, title, children}) => {
	return (
		<section className={styles.wrapper}>
			<header className={styles.header}>
				{icon}
				<span className={styles.title}> {title}</span>
			</header>
			{children}
		</section>
	);
};

export default InfoBlock;
