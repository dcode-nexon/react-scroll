import News from './components/News';
import Pics from './components/Pics';
import Vids from './components/Vids';
import Visual from './components/Visual';
import './scss/style.scss';
import { useRef, useEffect } from 'react';

function App() {
	const main = useRef(null);
	const pos = useRef([]);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);

		return () => {
			window.removeEventListener('resize', getPos);
		};
	}, []);

	return (
		<main ref={main}>
			<Visual />
			<News />
			<Vids />
			<Pics />
		</main>
	);
}

export default App;
