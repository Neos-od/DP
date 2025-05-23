function News(){
	return(
		<div className="sec5">
			<div className="cont">
				<div className="left">
					<div className="main-title">
						<p>미디어</p>
						<h3>새로운 소식</h3>
						<div className="btns">
							<a className="btn" href="">더보기<i className="xi-angle-right-min"></i></a>
							<a className="btn" href="" target="_blank">Linked In 바로가기<i className="xi-angle-right-min"></i></a>
						</div>
					</div>
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="images/news1.jpg" alt="news1" />
								</div>
								<div className="txt">
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록 </p>
									<p className="desc">
										<span className="cate">언론보도</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="images/news2.jpg" alt="news2" />
								</div>
								<div className="txt">
									<p className="sbj">DP Living 장애인선수단 계약식</p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="mo-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="images/news2.jpg" alt="news2" />
								</div>
								<div className="txt">
									<p className="sbj">DP Living 장애인선수단 계약식</p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="pc-none">
						<div className="card">
							<a href="">
								<div className="thumb">
									<img src="images/news1.jpg" alt="news1" />
								</div>
								<div className="txt">
									<p className="sbj">DP, 1분기 영업이익 116억원 '역대 최고' 기록 </p>
									<p className="desc">
										<span className="cate">회사소식</span>
										2024-11-01
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="card">
						<a href="">
							<div className="thumb">
								<img src="images/news3.jpg" alt="news3" />
							</div>
							<div className="txt">
								<p className="sbj">올 매출액 1조 재달성 목표</p>
								<p className="desc">
									<span className="cate">언론보도</span>
									2024-11-01
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;