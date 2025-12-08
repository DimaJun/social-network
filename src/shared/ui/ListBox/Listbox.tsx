import {
	Listbox as HListBox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

import s from './Listbox.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface ListboxOption {
	value?: string;
	disabled?: boolean;
}

interface ListboxProps {
	className?: string;
	options?: ListboxOption[];
	value?: string;
	onChange?: (value: string) => void;
	label?: string;
}

export function Listbox(props: ListboxProps) {
	const { className, options, value, onChange, label } = props;

	const selected = options.find((opt) => opt.value === value);

	return (
		<HListBox
			className={classNames(s.listbox, {}, [className])}
			as='div'
			value={value}
			onChange={onChange}
		>
			{label && <span>{label}:</span>}
			<ListboxButton className={s.trigger}>
				{selected.value}
				<ChevronDown />
			</ListboxButton>
			<ListboxOptions className={s.options}>
				{options.map((opt) => (
					<ListboxOption
						className={s.option}
						key={opt.value}
						value={opt.value}
						disabled={opt.disabled}
					>
						{opt.value}
					</ListboxOption>
				))}
			</ListboxOptions>
		</HListBox>
	);
}
