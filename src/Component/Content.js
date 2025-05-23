import Intro from "./Intro";
import MainSlider from "./MainSlider";
import Info1 from "./Info1";
import Info2 from "./Info2";
import Work from "./Work";
import News from "./News";

function Content(){
	return(
		<section className="sec-content">
			<div className="index">
				<Intro />
				<MainSlider />
				<Info1 />
				<Info2 />
				<Work />
				<News />
			</div>
		</section>
	);
}

export default Content;