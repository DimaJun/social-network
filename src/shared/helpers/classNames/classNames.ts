export type Mods = Record<string, boolean>;

export function classNames(
	mainClass: string,
	mods: Mods = {},
	additionalClasses: string[] = []
): string {
	return [
		mainClass,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([key]) => key),
		...additionalClasses,
	].join(' ');
}
