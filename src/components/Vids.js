function Vids({ Scrolled, currentPos }) {
	//전체 스크롤 거리값에서 해당 섹션요소의 세로 위치값을 뺀값
	//해당박스가 활성화 된 순간의 위치값을 0으로 만들기 위함
	const position = Scrolled - currentPos || 0;
	return (
		<section id='vids' className='myScroll'>
			<h1
				style={{
					left: position * 4,
				}}>
				YOUTUBE
			</h1>

			<h2
				style={{
					left: position / 2,
				}}>
				YOUTUBE
			</h2>

			<div
				className='box'
				style={{
					transform: `scale(${1 + position / 1000})`,
					opacity: 1 - position / 1000,
				}}></div>
		</section>
	);
}

export default Vids;
