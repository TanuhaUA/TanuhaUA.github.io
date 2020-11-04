import React from 'react';
import { CodeFilled } from '@ant-design/icons';
import { skills } from '../../helpers/data';
import InfoBlock from '../InfoBlock';
import styles from './Skills.module.scss';

const Skills = () => {
	return (
		<InfoBlock icon={<CodeFilled/>} title="Skills">
			<ul className={styles.list}>
				{
					skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))
				}
			</ul>
		</InfoBlock>
	);
};

export default Skills;
