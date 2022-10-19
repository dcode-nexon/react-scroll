import { useRef, useEffect } from 'react';

function Btns({ setPos, setScrolled }) {
	const pos = useRef([]);
	const btnRef = useRef(null);

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
		const scroll = window.scrollY;
		setScrolled(scroll);

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	//컴포넌트가 처음 마운트시 getPos함수를 resize이벤트에 연결
	useEffect(() => {
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
			{Array(4)
				.fill()
				.map((_, idx) => (
					<li key={idx}></li>
				))}
		</ul>
	);
}

export default Btns;
