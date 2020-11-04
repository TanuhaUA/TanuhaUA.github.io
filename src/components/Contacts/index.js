import React from 'react';
import { EnvironmentFilled, PhoneFilled, MailFilled, LinkedinFilled } from '@ant-design/icons';
import { contacts } from "../../helpers/data";
import styles from './Contacts.module.scss';

const { city, phone, email, linkedIn } = contacts;

const Contacts = () => {
	return (
		<div className={styles.content}>
			<div><EnvironmentFilled /> {city}</div>
			<div><MailFilled /> {email}</div>
			<div><PhoneFilled /> {phone}</div>
			<div><LinkedinFilled /> <a href={linkedIn} title="linkedIn" className={styles.link} target="_blank" rel="noreferrer">{linkedIn}</a></div>
		</div>
	);
};

export default Contacts;
