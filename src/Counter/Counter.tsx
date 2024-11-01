import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);
	const incrimentHnadler = () => {
		setCount(count + 1);
	};
	const dicrimentHnadler = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<button className={cls.btn} onClick={dicrimentHnadler}>
				-
			</button>
			<div>{count}</div>
			<button className={cls.btn} onClick={incrimentHnadler}>
				+
			</button>
		</div>
	);
};
