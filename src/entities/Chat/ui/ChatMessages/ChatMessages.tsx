import s from './ChatMessages.module.scss';

import { MessageBlock } from '@/entities/Message';

export function ChatMessages() {
	return (
		<div className={s.messages}>
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.' />
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
			<MessageBlock
				message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facilis illo officia porro recusandae sapiente.'
				isOwn={true}
			/>
		</div>
	);
}
