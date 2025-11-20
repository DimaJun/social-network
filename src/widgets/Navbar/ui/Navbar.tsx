import s from './Navbar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import VibenetLogo from '@/shared/assets/icons/vibenet-logo.svg';

export function Navbar() {
	return (
		<div className={classNames(s.Navbar, {}, [])}>
			<div className={s.logo}>
				<Icon
					Svg={VibenetLogo}
					width={60}
					height={60}
				/>
				<p>Vibenet</p>
			</div>
		</div>
	);
}
