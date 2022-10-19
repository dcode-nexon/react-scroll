import News from './components/News';
import Pics from './components/Pics';
import Vids from './components/Vids';
import Visual from './components/Visual';
import Btns from './components/Btns';
import './scss/style.scss';
import { useState, useEffect } from 'react';

function App() {
	const [Pos, setPos] = useState([]);
	const [Scrolled, setScrolled] = useState(0);

	return (
		<>
			<Visual />
			<News />
			<Vids />
			<Pics />
			<Btns setPos={setPos} setScrolled={setScrolled} />
		</>
	);
}

export default App;
