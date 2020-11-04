import React from 'react';
import { ReadFilled } from '@ant-design/icons';
import { education } from '../../helpers/data';
import InfoBlock from '../InfoBlock';
import History from '../History';

const Education = () => {
	return (
		<InfoBlock icon={<ReadFilled />} title="Education">
			<History events={education} />
		</InfoBlock>
	);
};

export default Education;
