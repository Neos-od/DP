function Header(){
	return(
		<section className="sec-header">
			<header id="header" className="up">
				<h1 className="hd-logo"><a href=""><span className="hide">TP</span></a></h1>
				<div className="hd-menu">
					<nav className="gnb-wrap">
						<ul className="gnb">
							<li>
								<a href="">회사소개</a>
								<div className="depth">
									<ul>
										<li><a href="">회사개요</a></li>
										<li><a href="">연혁</a></li>
										<li><a href="">조직도</a></li>
										<li><a href="">파트너</a></li>
										<li><a href="">오시는 길</a></li>
									</ul>
								</div>
							</li>
							<li>
								<a href="">사업부문</a>
								<div className="depth">
									<ul>
										<li><a href="">웹사이트</a></li>
										<li><a href="">홍보·마켓팅</a></li>
										<li><a href="">정보시스템</a></li>
										<li><a href="">서버·호스팅</a></li>
									</ul>
								</div>
							</li>
							<li>
								<a href="">솔루션</a>
								<div className="depth">
									<ul>
										<li><a href="">솔루션 소개</a></li>
									</ul>
								</div>
							</li>
							<li>
								<a href="">주요실적</a>
								<div className="depth">
									<ul>
										<li><a href="">주요실적 소개</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</nav>
					<span className="hd-mak"></span>
				</div>
				<div className="hd-info">
					<div className="lang">
						<a href="" className="on">KOR</a>
						<a href="">ENG</a>
					</div>
					<div className="hd-allmenu-open">
						<div type="button" className="btn-set">
							<div className="btn-all-menu">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</header>
		</section>
	)
}

export default Header;