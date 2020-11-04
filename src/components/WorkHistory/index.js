import React from 'react';
import { ShoppingFilled } from '@ant-design/icons';
import { workHistory } from '../../helpers/data';
import InfoBlock from '../InfoBlock';
import History from '../History';

const WorkHistory = () => {
	return (
		<InfoBlock icon={<ShoppingFilled />} title="Work History">
			<History events={workHistory} />
		</InfoBlock>
	);
};

export default WorkHistory;
