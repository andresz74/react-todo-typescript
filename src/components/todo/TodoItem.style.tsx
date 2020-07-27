import { style as s } from 'typestyle';

export const getTitleStyle = (completed: boolean) => {
	return s({
		display: 'flex',
		flexGrow: 1,
		textDecoration: completed ? 'line-through' : 'none',
	});
};

export const todoItemBox = s({
	backgroundColor: '#f4f4f4',
	padding: '10px',
	borderBottom: '1px #ccc dotted',
	alignItems: 'center',
	display: 'flex',
});

export const checkboxStyle = s({
	marginRight: '20px',
});

export const titleStyle = s({
	display: 'flex',
	flexGrow: 1,
});

export const completedStyle = s({
	textDecoration: 'line-through',
});

export const btnDelete = s({
	backgroundColor: 'rgb(160,45,45)',
	alignItems: 'center',
	border: 0,
	borderRadius: '50%',
	color: '#fff',
	cursor: 'pointer',
	display: 'flex',
	fontSize: '12px',
	justifyContent: 'center',
	height: '20px',
	width: '20px',
});
