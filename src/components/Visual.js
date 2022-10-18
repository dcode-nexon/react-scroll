import Anime from '../assets/Anime';

const btnStyle = {
	position: 'absolute',
	top: 120,
	left: 100,
};

function Visual() {
	return (
		<figure id='visual'>
			<button
				style={btnStyle}
				onClick={() => {
					new Anime(window, {
						prop: 'scroll',
						value: 3000,
						duration: 1000,
					});
				}}>
				start
			</button>
		</figure>
	);
}

export default Visual;
