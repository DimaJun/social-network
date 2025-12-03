import s from './MessagesList.module.scss';

import { MessageBlock } from '@/entities/Message/ui/MessageBlock/MessageBlock';

export function MessagesList() {
	return (
		<div className={s.list}>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={true}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
			<MessageBlock
				isOwn={false}
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dicta eum id, molestias sunt voluptas.'
			/>
		</div>
	);
}
