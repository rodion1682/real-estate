import { Button } from 'shared/ui/Button/ui/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
	const [error, setError] = useState(false);

	const throwError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);
	// eslint-disable-next-line i18next/no-literal-string
	return <Button onClick={throwError}>throw error</Button>;
};
