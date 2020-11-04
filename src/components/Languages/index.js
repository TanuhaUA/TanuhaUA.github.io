import React from 'react';
import { FlagFilled } from '@ant-design/icons';
import { languages } from '../../helpers/data';
import InfoBlock from '../InfoBlock';
import styles from './Languages.module.scss';

const Languages = () => {
	return (
		<InfoBlock icon={<FlagFilled />} title="Languages">
			<ul>
				{
					languages.map(({ name, level }) => (
						<li key={name}>{name} <span className={styles.level}>({level})</span></li>
					))
				}
			</ul>
		</InfoBlock>
	);
};

export default Languages;
