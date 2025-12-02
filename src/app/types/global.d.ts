declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}

	const classNames: IClassNames;
	export = classNames;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}
declare module '*.jpeg' {
	const value: string;
	export default value;
}
declare module '*.png' {
	const value: string;
	export default value;
}
declare module '*.svg' {
	import React from 'react';

	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
