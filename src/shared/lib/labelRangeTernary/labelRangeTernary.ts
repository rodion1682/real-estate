export const labelRangeTernary = (
	from: number,
	to: number,
	text: string
): string => {
	return from === 0 && to === 0
		? text
		: from === 0
			? `0 - ${String(to)}`
			: to === 0
				? `${String(from)} - ...`
				: `${String(from)} - ${String(to)}`;
};
