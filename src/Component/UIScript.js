import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Swiper from 'swiper';
import Lenis from '@studio-freight/lenis';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function UIScript(){
	function lenisAnimation(){
			const lenis=new Lenis({
				duration: 2,
				easing: (t) => Math.min(1, 1.001-Math.pow(2, -10*t))
			});

			function raf(time){
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

		requestAnimationFrame(raf);
	}

	useEffect(() => {
		// intro
		const introTl=gsap.timeline({ paused: true });

		introTl.timeScale(6).play();

		if(window.matchMedia("(max-width: 969px)").matches){ // mobile
			introTl.to(".intro .title-t ", { y: 0, x: 0, duration: 4 })
			.to(".intro .title-p ", { y: 0, x: 0, duration: 4 }, 0)
			.to(".intro .hidden-t .basic ", { duration: 2 })
			.to(".intro .hidden-t .color ", { alpha: 1, duration: 4, delay: -1 })
			.to(".intro .hidden-t ", { alpha: 0,  duration: 4, delay: 4 })
			.to(".intro .hidden-t ", { width: "30px", duration: 5 })
			.to(".intro .txt-t ", { alpha: 1, duration: 4, delay: -6 })
			.to(".intro .txt-p ", { alpha: 1, duration: 4, delay: -6 })
			.to(".intro .title-t ", { duration: 4, marginRight: 0, delay: -5 })
			.to(".intro .title-p", { duration: 4, delay: -5 })
			.to(":lang(ko) .intro .title-m", { alpha: 1 , width: "270px", duration: 4, delay: 5 })
			.to(".intro", { top: "-100vh", duration: 5, delay: 8 });

			const tl1=gsap.timeline({
				scrollTrigger: {
					trigger: ".pin1",
					scrub: 1,
					pin: ".pin1",
					start: "top top",
				}
			});

			tl1.to(".sec2 .title-m", { color: "#fff", duration: 4 })
			.to(".sec2 .color", { alpha: 0, duration: 4, delay: -3 })
			.to(".sec2 .white", { alpha: 1, duration: 4, delay: -4 })
			.to(".sec2 .image", { alpha: 1, duration: 4, delay: -4 })
			.to(".sec2 .title1", { alpha: 0, duration: 2, delay: 1 })
			.to(".sec2 .title2", { alpha: 1, duration: 2, delay: 1 })
			.to(".sec2 .title2 p span", { y: 0, duration: 3, delay: 1 });

			const tl2=gsap.timeline({
				scrollTrigger: {
					trigger: ".pin2",
					scrub: 2,
					pin: ".pin2", 
					start:"top top"
				}
			});

			tl2.to(".sec3 .image", { width: "100%", height: "100%", borderRadius: 0, top: "50%", duration: 1, delay: 1 })
			tl2.to(".sec3 .circle img", { opacity: 0.5, duration: 2, delay: 1 }, 0)
			tl2.to(".sec3 .main-title", { top: "-100vh", duration: 0.5, delay: 1 }, 0)
			tl2.to(".sec3 .global-tit div:nth-child(1) span", { y: 0, duration: 1, delay: -1 })
			tl2.to(".sec3 .global-tit div:nth-child(2) span", { y: 0, duration: 1, delay: -0.8 });
		}
		else{ // desktop
			introTl.to(".intro .title-t", { y: 0, x: 0, duration: 4 })
			.to(".intro .title-p", { y: 0, x: 0, duration: 4 }, 0)
			.to(".intro .hidden-t .basic ", { duration: 2 })
			.to(".intro .hidden-t .color ", { alpha: 1, duration: 4, delay: -1 })
			.to(".intro .hidden-t ", { alpha: 0, duration: 4, delay: 4 })
			.to(".intro .hidden-t ", { width: "60px", duration: 5 })
			.to(".intro .txt-t", { alpha: 1, duration: 4, delay: -6 })
			.to(".intro .txt-p", { alpha: 1, duration: 4, delay: -6 })
			.to(".intro .title-t", { duration: 4, marginRight: 0, delay: -5 })
			.to(".intro .title-p", { duration: 4, delay: -5 })
			.to(".intro .title-m", { alpha: 1, width: "460px", duration: 4, delay: 5 })
			.to(".intro", { top: "-100vh", duration: 5, delay: 8 });

			const tl1=gsap.timeline({
				scrollTrigger: {
					trigger: ".pin1",
					scrub: 1,
					pin: ".pin1",
					start:"top top",
					end: "+=300%"
				}
			});

			tl1.to(".sec2 .title-m", { color: "#fff", duration: 4 })
			.to(".sec2 .color", { alpha: 0, duration: 4, delay: -3 })
			.to(".sec2 .white", { alpha: 1, duration: 4, delay: -4 })
			.to(".sec2 .image", { alpha:1, duration: 4, delay: -4 })
			.to(".sec2 .title1", { alpha: 0, duration: 2, delay: 1 })
			.to(".sec2 .title2", { alpha: 1 , duration: 2, delay: 1 })
			.to(".sec2 .title2 p span", { y: 0, duration: 3, delay: 1 });

			const tl2=gsap.timeline({
				scrollTrigger: {
					trigger: ".pin2",
					scrub: 2,
					pin: ".pin2", 
					start:"top top", 
					end: "+=200%"
				}
			});

			tl2.to(".sec3 .image", { width: "100%", height: "100%", borderRadius: 0, top: "50%", duration: 1, delay: 1 })
			.to(".sec3 .circle img", { opacity: 0.5,  duration: 2, delay: 1 }, 0)
			.to(".sec3 .main-title", { top: "-100vh", duration: 0.5, delay: 1 }, 0)
			.to(".sec3 .global-tit div:nth-child(1) span", { y: 0, duration: 1, delay: -1 })
			.to(".sec3 .global-tit div:nth-child(2) span", { y: 0, duration: 1, delay: -0.8 });
		}

		let skipBtn=document.querySelector(".skip-btn a");
		let intro=document.querySelector(".intro");

		skipBtn.addEventListener("click", function(e){
			e.preventDefault();

			gsap.to(".intro", {opacity: 0, duration: 1, onComplete: function(){
				intro.style.display="none";
			}});
		});

		// mainSwiper
		// let naviControl=document.querySelectorAll(".swiper-navi .swiper-pagination-switch");

		/*
		const mainSwiper=new Swiper(".main-swiper", {
			speed: 1000,
			loop: true,
			effect: "fade",
			autoplay: {
				delay: 3000
			},
			pagination: {
				el: ".swiper-navi .swiper-pagination",
				type: "progressbar"
			},
			on: {
				init: function(){
					naviControl.forEach(function(item, i){
						if(i == this.realIndex){
							item.classList.add("active");
						}
						else{
							item.classList.remove("active");
						}
					});
				},
				slideChangeTransitionStart: function(){
					naviControl.forEach(function(item, i){
						if(i == this.realIndex){
							item.classList.add("active");
						}
						else{
							item.classList.remove("active");
						}
					});
				}
			}
		});
		*/

		/*
		naviControl.forEach(function(item, i){
			item.addEventListener("click", function(){
				mainSwiper.slideToLoop(i);
			});
		});
		*/

		initHeader();
		initTopMove();
		initFamilySite();

		function initHeader(){
		let header=document.querySelector("#header");
		let menuLi=header.querySelectorAll(".hd-menu .gnb > li");
		// let menuA=header.querySelectorAll(".hd-menu .gnb > li > a");
		let tab=document.querySelector(".hd-allmenu-open");
		let dimmed=document.querySelector(".hd-menu .hd-mak");

		let lastScrollTop=0;
		let device;

		window.addEventListener("load", onScroll);
		window.addEventListener("scroll", onScroll);

		function onScroll(){
			let tmp=window.scrollY;

			if(tmp > 0){
				header.classList.add("reverse");
			}
			else{
				header.classList.remove("reverse");
			}

			if(tmp > lastScrollTop && tmp > 0){
				header.classList.add("down");
				header.classList.remove("up");
			}
			else{
				header.classList.add("up");
				header.classList.remove("down");
			}

			lastScrollTop=tmp;
		}

		tab.addEventListener("click", function(e){
			e.preventDefault();

			if(header.classList.contains("menu-open") == false){
				header.classList.add("menu-open");

				menuLi.forEach(function(item){
					if(item.classList.contains("open") == true){
						item.classList.remove("open");
					}
				});
			}
			else{
				header.classList.remove("menu-open");
			}
		});

		dimmed.addEventListener("click", function(){
			header.classList.remove("menu-open");
		});

		menuLi.forEach(function(item, i){
			item.addEventListener("mouseenter", function(){
				if(device == "mobile") return;

				header.classList.add("on");

				for(let j=0; j<menuLi.length; j++){
					if(j == i){
						menuLi[j].classList.add("on");
					}
					else{
						menuLi[j].classList.remove("on");
					}
				}
			});
		});

		header.addEventListener("mouseleave", function(){
			if(device == "mobile") return;

			header.classList.remove("on");
		});

		menuLi.forEach(function(item, i){
			item.addEventListener("click", function(e){
				if(device == "desktop") return;

				e.preventDefault();

				if(e.currentTarget.classList.contains("open") == false){
					for(let j=0; j<menuLi.length; j++){
						if(j == i){
							menuLi[j].classList.add("open");
						}
						else{
							menuLi[j].classList.remove("open");
						}
					}
				}
				else{
					e.currentTarget.classList.remove("open");
				}
			});
		});

		function resizeFunction(){
			let winw=window.innerWidth;

			if(winw < 1281){ // mobile
				if(device == "mobile") return;
				device="mobile";
			}
			else{ // desktop
				if(device == "desktop") return;
				device="desktop";
			}
		}

		resizeFunction();

		window.addEventListener("resize", function(){
			if(header.classList.contains("menu-open")){
				header.classList.remove("menu-open");
			}

			resizeFunction();
		});
	}

	function initTopMove(){
		let btnTopMove=document.getElementById("btn-topmove");
		let button=btnTopMove.querySelector("button");

		btnTopMove.style.display="none";

		let topFlag=true;

		window.addEventListener("scroll", function(){
			if(window.scrollY < window.innerHeight/2){
				if(topFlag == true) return;

				topFlag=true;

				gsap.to(btnTopMove, { opacity: 0, duration: 0.3, onComplete: function(){
					btnTopMove.style.display="none";
				}});
			}
			else{
				if(topFlag == false) return;

				topFlag=false;

				gsap.fromTo(btnTopMove, { display: "block", opacity: 0 }, { opacity: 1, duration: 0.3 });
			}
		});

		button.addEventListener("click", function(){
			gsap.to(window, {scrollTo: 0, duration: 0.3});
		});
	}

	function initFamilySite(){
		const familyBtn=document.getElementById("family-btn");
		const familyPopup=familyBtn.nextElementSibling;

		familyBtn.addEventListener("click", function(e){
			e.preventDefault();

			if(familyBtn.classList.contains("open") == false){
				familyBtn.classList.add("open");
				familyPopup.style.display="block";
			}
			else{
				familyBtn.classList.remove("open");
				familyPopup.style.display="none";
			}
		});

		document.addEventListener("click", function(e){
			if(familyBtn.contains(e.target) == false){
				familyBtn.classList.remove("open");
				familyPopup.style.display="none";
			}
		});

		lenisAnimation();
		}		
	});

	return(
		<></>
	);
}

export default UIScript;

// import React, { useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // ScrollToPlugin import
// import Swiper from 'swiper';
// import Lenis from '@studio-freight/lenis';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css';

// // GSAP 플러그인 등록: ScrollTrigger와 ScrollToPlugin을 모두 등록합니다.
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// function UIScript(){
//   // lenisAnimation 함수를 UIScript 컴포넌트 외부나 useEffect 내부에 정의하여
//   // 의도치 않게 여러 번 호출되지 않도록 합니다.
//   // 여기서는 useEffect 안에서 호출되도록 수정할 것이므로, 굳이 외부에 함수로 분리할 필요는 없습니다.

//   useEffect(() => {
//     // Lenis 초기화 (컴포넌트 마운트 시 한 번만 실행)
//     const lenis = new Lenis({
//         duration: 2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
//     });

//     function raf(time) {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // 컴포넌트 언마운트 시 Lenis 인스턴스 정리
//     return () => {
//         lenis.destroy();
//     };
//   }, []); // 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행되도록 합니다.


//   useEffect(() => {
//     // intro
//     const introTl=gsap.timeline({ paused: true });

//     introTl.timeScale(6).play();

//     if(window.matchMedia("(max-width: 969px)").matches){ // mobile
//       introTl.to(".intro .title-t ", { y: 0, x: 0, duration: 4 })
//       .to(".intro .title-p ", { y: 0, x: 0, duration: 4 }, 0)
//       .to(".intro .hidden-t .basic ", { duration: 2 })
//       .to(".intro .hidden-t .color ", { alpha: 1, duration: 4, delay: -1 })
//       .to(".intro .hidden-t ", { alpha: 0,  duration: 4, delay: 4 })
//       .to(".intro .hidden-t ", { width: "30px", duration: 5 })
//       .to(".intro .txt-t ", { alpha: 1, duration: 4, delay: -6 })
//       .to(".intro .txt-p ", { alpha: 1, duration: 4, delay: -6 })
//       .to(".intro .title-t ", { duration: 4, marginRight: 0, delay: -5 })
//       .to(".intro .title-p", { duration: 4, delay: -5 })
//       .to(":lang(ko) .intro .title-m", { alpha: 1 , width: "270px", duration: 4, delay: 5 })
//       .to(".intro", { top: "-100vh", duration: 5, delay: 8 });

//       const tl1=gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin1",
//           scrub: 1,
//           pin: ".pin1",
//           start: "top top",
//         }
//       });

//       tl1.to(".sec2 .title-m", { color: "#fff", duration: 4 })
//       .to(".sec2 .color", { alpha: 0, duration: 4, delay: -3 })
//       .to(".sec2 .white", { alpha: 1, duration: 4, delay: -4 })
//       .to(".sec2 .image", { alpha: 1, duration: 4, delay: -4 })
//       .to(".sec2 .title1", { alpha: 0, duration: 2, delay: 1 })
//       .to(".sec2 .title2", { alpha: 1, duration: 2, delay: 1 })
//       .to(".sec2 .title2 p span", { y: 0, duration: 3, delay: 1 });

//       const tl2=gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin2",
//           scrub: 2,
//           pin: ".pin2", 
//           start:"top top"
//         }
//       });

//       tl2.to(".sec3 .image", { width: "100%", height: "100%", borderRadius: 0, top: "50%", duration: 1, delay: 1 })
//       tl2.to(".sec3 .circle img", { opacity: 0.5, duration: 2, delay: 1 }, 0)
//       tl2.to(".sec3 .main-title", { top: "-100vh", duration: 0.5, delay: 1 }, 0)
//       tl2.to(".sec3 .global-tit div:nth-child(1) span", { y: 0, duration: 1, delay: -1 })
//       tl2.to(".sec3 .global-tit div:nth-child(2) span", { y: 0, duration: 1, delay: -0.8 });
//     }
//     else{ // desktop
//       introTl.to(".intro .title-t", { y: 0, x: 0, duration: 4 })
//       .to(".intro .title-p", { y: 0, x: 0, duration: 4 }, 0)
//       .to(".intro .hidden-t .basic ", { duration: 2 })
//       .to(".intro .hidden-t .color ", { alpha: 1, duration: 4, delay: -1 })
//       .to(".intro .hidden-t ", { alpha: 0, duration: 4, delay: 4 })
//       .to(".intro .hidden-t ", { width: "60px", duration: 5 })
//       .to(".intro .txt-t", { alpha: 1, duration: 4, delay: -6 })
//       .to(".intro .txt-p", { alpha: 1, duration: 4, delay: -6 })
//       .to(".intro .title-t", { duration: 4, marginRight: 0, delay: -5 })
//       .to(".intro .title-p", { duration: 4, delay: -5 })
//       .to(".intro .title-m", { alpha: 1, width: "460px", duration: 4, delay: 5 })
//       .to(".intro", { top: "-100vh", duration: 5, delay: 8 });

//       const tl1=gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin1",
//           scrub: 1,
//           pin: ".pin1",
//           start:"top top",
//           end: "+=300%"
//         }
//       });

//       tl1.to(".sec2 .title-m", { color: "#fff", duration: 4 })
//       .to(".sec2 .color", { alpha: 0, duration: 4, delay: -3 })
//       .to(".sec2 .white", { alpha: 1, duration: 4, delay: -4 })
//       .to(".sec2 .image", { alpha:1, duration: 4, delay: -4 })
//       .to(".sec2 .title1", { alpha: 0, duration: 2, delay: 1 })
//       .to(".sec2 .title2", { alpha: 1 , duration: 2, delay: 1 })
//       .to(".sec2 .title2 p span", { y: 0, duration: 3, delay: 1 });

//       const tl2=gsap.timeline({
//         scrollTrigger: {
//           trigger: ".pin2",
//           scrub: 2,
//           pin: ".pin2", 
//           start:"top top", 
//           end: "+=200%"
//         }
//       });

//       tl2.to(".sec3 .image", { width: "100%", height: "100%", borderRadius: 0, top: "50%", duration: 1, delay: 1 })
//       .to(".sec3 .circle img", { opacity: 0.5,  duration: 2, delay: 1 }, 0)
//       .to(".sec3 .main-title", { top: "-100vh", duration: 0.5, delay: 1 }, 0)
//       .to(".sec3 .global-tit div:nth-child(1) span", { y: 0, duration: 1, delay: -1 })
//       .to(".sec3 .global-tit div:nth-child(2) span", { y: 0, duration: 1, delay: -0.8 });
//     }

//     // skipBtn과 intro 요소가 DOM에 존재할 때만 이벤트 리스너를 추가하도록 조건부 처리
//     const skipBtn = document.querySelector(".skip-btn a");
//     const intro = document.querySelector(".intro");

//     if (skipBtn && intro) {
//         skipBtn.addEventListener("click", function(e){
//             e.preventDefault();

//             gsap.to(".intro", {opacity: 0, duration: 1, onComplete: function(){
//                 intro.style.display="none";
//                 // mainSwiper.autoplay.start(); // 주석 처리된 부분
//             }});
//         });
//     }

//     // mainSwiper
//     // let naviControl=document.querySelectorAll(".swiper-navi .swiper-pagination-switch");

//     /*
//     const mainSwiper=new Swiper(".main-swiper", {
//       speed: 1000,
//       loop: true,
//       effect: "fade",
//       autoplay: {
//         delay: 3000
//       },
//       pagination: {
//         el: ".swiper-navi .swiper-pagination",
//         type: "progressbar"
//       },
//       on: {
//         init: function(){
//           naviControl.forEach(function(item, i){
//             if(i == this.realIndex){
//               item.classList.add("active");
//             }
//             else{
//               item.classList.remove("active");
//             }
//           });
//         },
//         slideChangeTransitionStart: function(){
//           naviControl.forEach(function(item, i){
//             if(i == this.realIndex){
//               item.classList.add("active");
//             }
//             else{
//               item.classList.remove("active");
//             }
//           });
//         }
//       }
//     });
//     */

//     /*
//     naviControl.forEach(function(item, i){
//       item.addEventListener("click", function(){
//         mainSwiper.slideToLoop(i);
//       });
//     });
//     */

//     initHeader();
//     initTopMove(); // <-- 여기에서 호출합니다.
//     initFamilySite();

//     function initHeader(){
//     let header=document.querySelector("#header");
//     let menuLi=header.querySelectorAll(".hd-menu .gnb > li");
//     // let menuA=header.querySelectorAll(".hd-menu .gnb > li > a");
//     let tab=document.querySelector(".hd-allmenu-open");
//     let dimmed=document.querySelector(".hd-menu .hd-mak");

//     let lastScrollTop=0;
//     let device;

//     // header, tab, dimmed 요소가 존재할 때만 이벤트 리스너 추가
//     if (header) {
//         window.addEventListener("load", onScroll);
//         window.addEventListener("scroll", onScroll);
//     }


//     function onScroll(){
//       let tmp=window.scrollY;

//       if(tmp > 0){
//         header.classList.add("reverse");
//       }
//       else{
//         header.classList.remove("reverse");
//       }

//       if(tmp > lastScrollTop && tmp > 0){
//         header.classList.add("down");
//         header.classList.remove("up");
//       }
//       else{
//         header.classList.add("up");
//         header.classList.remove("down");
//       }

//       lastScrollTop=tmp;
//     }

//     if (tab && header) {
//         tab.addEventListener("click", function(e){
//             e.preventDefault();

//             if(header.classList.contains("menu-open") == false){
//                 header.classList.add("menu-open");

//                 menuLi.forEach(function(item){
//                     if(item.classList.contains("open") == true){
//                         item.classList.remove("open");
//                     }
//                 });
//             }
//             else{
//                 header.classList.remove("menu-open");
//             }
//         });
//     }

//     if (dimmed && header) {
//         dimmed.addEventListener("click", function(){
//             header.classList.remove("menu-open");
//         });
//     }


//     menuLi.forEach(function(item, i){
//       item.addEventListener("mouseenter", function(){
//         if(device == "mobile") return;

//         header.classList.add("on");

//         for(let j=0; j<menuLi.length; j++){
//           if(j == i){
//             menuLi[j].classList.add("on");
//           }
//           else{
//             menuLi[j].classList.remove("on");
//           }
//         }
//       });
//     });

//     if (header) { // header 요소가 존재할 때만 이벤트 리스너 추가
//         header.addEventListener("mouseleave", function(){
//             if(device == "mobile") return;

//             header.classList.remove("on");
//         });
//     }


//     menuLi.forEach(function(item, i){
//       item.addEventListener("click", function(e){
//         if(device == "desktop") return;

//         e.preventDefault();

//         if(e.currentTarget.classList.contains("open") == false){
//           for(let j=0; j<menuLi.length; j++){
//             if(j == i){
//               menuLi[j].classList.add("open");
//             }
//             else{
//               menuLi[j].classList.remove("open");
//             }
//           }
//         }
//         else{
//           e.currentTarget.classList.remove("open");
//         }
//       });
//     });

//     function resizeFunction(){
//       let winw=window.innerWidth;

//       if(winw < 1281){ // mobile
//         if(device == "mobile") return;
//         device="mobile";
//       }
//       else{ // desktop
//         if(device == "desktop") return;
//         device="desktop";
//       }
//     }

//     resizeFunction();

//     // header 요소가 존재할 때만 이벤트 리스너 추가
//     if (header) {
//         window.addEventListener("resize", function(){
//             if(header.classList.contains("menu-open")){
//                 header.classList.remove("menu-open");
//             }

//             resizeFunction();
//         });
//     }
//   }

//   function initTopMove(){
//     let btnTopMove=document.getElementById("btn-topmove");

//     // btnTopMove 요소가 존재하지 않으면 함수를 즉시 종료합니다.
//     // React 컴포넌트 라이프사이클 상 DOM 요소가 아직 없을 수 있습니다.
//     if (!btnTopMove) {
//       return;
//     }

//     let button=btnTopMove.querySelector("button");

//     btnTopMove.style.display="none"; // 초기에는 숨김

//     let topFlag=true; // 스크롤 이벤트의 불필요한 반복 실행을 막기 위한 플래그

//     window.addEventListener("scroll", function(){
//       if(window.scrollY < window.innerHeight/2){ // 화면 상단 절반보다 위에 있을 때
//         if(topFlag === true) return; // 이미 숨겨진 상태라면 중복 실행 방지

//         topFlag=true;

//         gsap.to(btnTopMove, { opacity: 0, duration: 0.3, onComplete: function(){
//           btnTopMove.style.display="none"; // 애니메이션 완료 후 display: none 처리
//         }});
//       }
//       else{ // 화면 상단 절반보다 아래에 있을 때
//         if(topFlag === false) return; // 이미 보이는 상태라면 중복 실행 방지

//         topFlag=false;

//         gsap.fromTo(btnTopMove, { display: "block", opacity: 0 }, { opacity: 1, duration: 0.3 }); // display를 block으로 바꾸고 애니메이션 시작
//       }
//     });

//     // button 요소가 존재할 때만 클릭 이벤트 리스너 추가
//     if (button) {
//       button.addEventListener("click", function(){
//         // ScrollToPlugin이 등록되어 있어야 이 부분이 작동합니다.
//         gsap.to(window, {scrollTo: 0, duration: 0.3});
//       });
//     }
//   }


//   function initFamilySite(){
//     const familyBtn=document.getElementById("family-btn");
//     // familyBtn 요소가 존재하지 않으면 함수를 즉시 종료합니다.
//     if (!familyBtn) {
//         return;
//     }
//     const familyPopup=familyBtn.nextElementSibling;

//     if (familyPopup) { // familyPopup이 존재할 때만 이벤트 리스너 추가
//         familyBtn.addEventListener("click", function(e){
//             e.preventDefault();

//             if(familyBtn.classList.contains("open") == false){
//                 familyBtn.classList.add("open");
//                 familyPopup.style.display="block";
//             }
//             else{
//                 familyBtn.classList.remove("open");
//                 familyPopup.style.display="none";
//             }
//         });

//         document.addEventListener("click", function(e){
//             // 클릭된 요소가 familyBtn의 자손이 아닐 때만 닫기
//             if(!familyBtn.contains(e.target) && !familyPopup.contains(e.target)){
//                 familyBtn.classList.remove("open");
//                 familyPopup.style.display="none";
//             }
//         });
//     }
//   }   
//   }); // <-- 이 닫는 괄호는 useEffect의 닫는 괄호입니다.

//   return(
//     <></> // 실제 웹페이지에서 탑 버튼을 보여주는 JSX 마크업이 있어야 합니다.
//   );
// }

// export default UIScript;