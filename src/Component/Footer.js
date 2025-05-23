function Footer(){
	return(
		<section className="sec-footer">
			<div className="inner">
				<div className="ft-nav">
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
					<div className="family-site">
						<a id="family-btn" href="">패밀리 사이트 <i className="xi-angle-down-min"></i></a>
						<ul>
							<li>
								<p>family1</p>
								<div className="depth">
									<ul>
										<li><a href="" target="_blank">family1-1</a></li>
										<li><a href="" target="_blank">family1-2</a></li>
										<li><a href="" target="_blank">family1-3</a></li>
									</ul>
								</div>
							</li>
							<li>
								<p>family2</p>
								<div className="depth">
									<ul>
										<li><a href="" target="_blank">family2-1</a></li>
										<li><a href="" target="_blank">family2-2</a></li>
										<li><a href="" target="_blank">family2-3</a></li>
									</ul>
								</div>
							</li>
							<li>
								<p>family3</p>
								<div className="depth">
									<ul>
										<li><a href="" target="_blank">family3-1</a></li>
										<li><a href="" target="_blank">family3-2</a></li>
										<li><a href="" target="_blank">family3-3</a></li>
										<li><a href="" target="_blank">family3-4</a></li>
										<li><a href="" target="_blank">family3-5</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="ft-btm">
					<div className="ft-logo"><a href=""></a></div>
					<div className="ft-info">
						<p>
							주소 : 경기도 만안구 안양1동 226-14 삼양오피스텔 405호<br/>
							TEL 010-9075-0614<span className="bar"></span><br className="pc-none" />designdigit@hanmail.net<br /><br />
							COPYRIGHTⓒ DESIGNDIGIT ALL RIGHTS RESERVED.
						</p>
					</div>
					<div className="ft-links">
						<a href="">문의하기 <i>↗</i></a>
						<a href="">오시는 길 <i>↗</i></a>
						<a href="">개인정보처리방침 <i>↗</i></a>
					</div>
				</div>
			</div>
		</section>		
	);
}

export default Footer;