import React from 'react';
import styles from './History.module.scss';

const History = ({ events }) => {
	return (
		<div>
			{
				events.map(({ period: { from, to }, position, place, tasks }) => (
					<div key={from + place} className={styles.line}>
						<div className={styles.period}>{from} - {to}</div>
						<div>
							{
								position && <div className={styles.position}>{position}</div>
							}
							{
								place && <div className={styles.place}>{place}</div>
							}
							{
								tasks?.length && (
									<ul>
										{
											tasks.map((task) => (
												<li key={task}>{task}</li>
											))
										}
									</ul>
								)
							}
						</div>
					</div>
				))
			}
		</div>
	);
};

export default History;
