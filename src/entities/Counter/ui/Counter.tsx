import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface CounterProps {
	className?: string;
}

export const Counter = ({ className }: CounterProps) => {
	const { t } = useTranslation('');
	const dispacth = useDispatch();
	const count = useSelector(getCounterValue);

	const increment = () => {
		dispacth(counterActions.increment());
	};
	const decrement = () => {
		dispacth(counterActions.decrement());
	};

	return (
		<div className={classNames('', {}, [className])}>
			<div data-testid="value-title">{count}</div>
			<div>
				<Button data-testid="increment-btn" onClick={increment}>
					{t('increment')}
				</Button>
				<Button data-testid="decrement-btn" onClick={decrement}>
					{t('decrement')}
				</Button>
			</div>
		</div>
	);
};
