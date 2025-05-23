import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function MainSlider(){
	// console.log("component in");

	let [mainSwiper, setMainSwiper]=useState(null);
	let [naviControl, setNaviControl]=useState(null);

	useEffect(() => {
		if(!mainSwiper) return;

		naviControl.forEach(function(item, i){
			item.addEventListener("click", function(){
				mainSwiper.slideToLoop(i);
			});
		});
	}, [mainSwiper]);

	const naviControlFunction=n => {
		if(!naviControl) return;

		naviControl.forEach(function(item, i){
			if(i == n){
				item.classList.add("active");
			}
			else{
				item.classList.remove("active");
			}
		});
	};

	return(
		<div className="sec1">
			<div className="swiper-container-wrapper">
				{/*
				<div className="swiper-container main-swiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>고객사의 니즈에 최적화된 <br className="only-mo" />디지털 통합 솔루션</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>고객사와 하나 된 <br className="only-mo" />행복한 성과</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="image mo-none"><img src="/images/slide1_1.jpg" alt="slide1_1" /></div>
							<div className="image pc-none"><img src="/images/slide1_2.jpg" alt="slide1_2" /></div>
						</div>
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>디자인을 기초로 기술력 실현</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>디자인을 기초로 기술력 실현</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="image mo-none"><img src="/images/slide2_1.jpg" alt="slide2_1" /></div>
							<div className="image pc-none"><img src="/images/slide2_2.jpg" alt="slide2_2" /></div>
						</div>
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>Everyday Outfit<br />Company</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>Everyday Outfit<br />Company</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="image mo-none"><img src="/images/slide3_1.jpg" alt="slide3_1" /></div>
							<div className="image pc-none"><img src="/images/slide3_2.jpg" alt="slide3_2" /></div>
						</div>
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>업계 1위 프리미엄 라이프스타일 크리에이터</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>업계 1위 프리미엄 라이프스타일 크리에이터</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="image mo-none"><img src="/images/slide4_1.jpg" alt="slide4_1" /></div>
							<div className="image pc-none"><img src="/images/slide4_2.jpg" alt="slide4_2" /></div>
						</div>
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>크리에이티브한 <br className="only-mo" />디자인 구현</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>크리에이티브한 <br className="only-mo" />디자인 구현</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="image mo-none"><img src="/images/slide5_1.jpg" alt="slide5_1" /></div>
							<div className="image pc-none"><img src="/images/slide5_2.jpg" alt="slide5_2" /></div>
						</div>
						<div className="swiper-slide">
							<div className="title mo-none">
								<h2>Work-life balance의 <br />공간과 문화를<br className="only-mo" />창조하는 회사</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div>
							<div className="title pc-none">
								<h2>Work-life balance의 <br />공간과 문화를  <br className="only-mo" />창조하는 회사</h2>
								<p>Your Trusted Partner <b>DP</b></p>
							</div> 
							<div className="image mo-none"><img src="/images/slide6_1.jpg" alt="slide6_1" /></div>
							<div className="image pc-none"><img src="/images/slide6_2.jpg" alt="slide6_2" /></div>
						</div>
					</div>
				</div>
				<div className="swiper-navi">
					<ul className="swiper-pagination-custom">
						<li className="swiper-pagination-switch first active"><span className="switch-title">p1</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p2</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p3</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p4</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p5</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p6</span></li>
					</ul>
					<div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
				</div>
				*/}

				<Swiper
					speed={1000}
					loop={true}
					effect="fade"
					autoplay={{
						delay: 5000
					}}
					pagination={{
						el: ".swiper-navi .swiper-pagination",
						type: "progressbar"
					}}
					onInit={swiper => {
						// console.log(swiper.realIndex, swiper.slides.length);
						// console.log(document.querySelectorAll(".swiper-navi .swiper-pagination-switch"));

						setMainSwiper(swiper);
						setNaviControl(document.querySelectorAll(".swiper-navi .swiper-pagination-switch"));	
					}}
					onSlideChange={swiper => {
						naviControlFunction(swiper.realIndex);
					}}
					modules={[Autoplay, Pagination, EffectFade]}
					className="swiper-container main-swiper"
				>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>고객사의 니즈에 최적화된 <br className="only-mo" />디지털 통합 솔루션</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>고객사와 하나 된 <br className="only-mo" />행복한 성과</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="image mo-none"><img src="/images/slide1_1.jpg" alt="slide1_1" /></div>
						<div className="image pc-none"><img src="/images/slide1_2.jpg" alt="slide1_2" /></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>디자인을 기초로 기술력 실현</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>디자인을 기초로 기술력 실현</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="image mo-none"><img src="/images/slide2_1.jpg" alt="slide2_1" /></div>
						<div className="image pc-none"><img src="/images/slide2_2.jpg" alt="slide2_2" /></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>Everyday Outfit<br />Company</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>Everyday Outfit<br />Company</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="image mo-none"><img src="/images/slide3_1.jpg" alt="slide3_1" /></div>
						<div className="image pc-none"><img src="/images/slide3_2.jpg" alt="slide3_2" /></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>업계 1위 프리미엄 라이프스타일 크리에이터</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>업계 1위 프리미엄 라이프스타일 크리에이터</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="image mo-none"><img src="/images/slide4_1.jpg" alt="slide4_1" /></div>
						<div className="image pc-none"><img src="/images/slide4_2.jpg" alt="slide4_2" /></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>크리에이티브한 <br className="only-mo" />디자인 구현</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>크리에이티브한 <br className="only-mo" />디자인 구현</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="image mo-none"><img src="/images/slide5_1.jpg" alt="slide5_1" /></div>
						<div className="image pc-none"><img src="/images/slide5_2.jpg" alt="slide5_2" /></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="title mo-none">
							<h2>Work-life balance의 <br />공간과 문화를<br className="only-mo" />창조하는 회사</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div>
						<div className="title pc-none">
							<h2>Work-life balance의 <br />공간과 문화를  <br className="only-mo" />창조하는 회사</h2>
							<p>Your Trusted Partner <b>DP</b></p>
						</div> 
						<div className="image mo-none"><img src="/images/slide6_1.jpg" alt="slide6_1" /></div>
						<div className="image pc-none"><img src="/images/slide6_2.jpg" alt="slide6_2" /></div>
					</SwiperSlide>
				</Swiper>
				<div className="swiper-navi">
					<ul className="swiper-pagination-custom">
						<li className="swiper-pagination-switch first"><span className="switch-title">p1</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p2</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p3</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p4</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p5</span></li>
						<li className="swiper-pagination-switch"><span className="switch-title">p6</span></li>
					</ul>
					<div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
				</div>
			</div>
		</div>
	);
}

export default MainSlider;