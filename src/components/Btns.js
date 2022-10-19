import { useRef, useEffect } from 'react';
import Anime from '../assets/Anime';

function Btns({ setPos, setScrolled }) {
	const pos = useRef([]);
	const btnRef = useRef(null);
	const speed = 500;
	const num = 4;

	//각 섹션의 세로위치값 구하는 함수
	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setPos(pos.current);
	};

	//스크롤시 버튼 활성화 함수
	const activation = () => {
		const base = -window.innerHeight / 4;
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		const scroll = window.scrollY;
		setScrolled(scroll);

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	//컴포넌트가 처음 마운트시 getPos함수를 resize이벤트에 연결
	useEffect(() => {
		btnRef.current.children[0].classList.add('on');
		btnRef.current.parentElement.querySelectorAll('.myScroll')[0].classList.add('on');
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(num)
				.fill()
				.map((_, idx) => (
					<li
						key={idx}
						onClick={() => {
							new Anime(window, {
								prop: 'scroll',
								value: pos.current[idx],
								duration: speed,
							});
						}}></li>
				))}
		</ul>
	);
}

export default Btns;
