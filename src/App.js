import UIScript from "./Component/UIScript";
import Header from './Component/Header';
import Content from "./Component/Content";
import TopBtn from "./Component/TopBtn";
import Footer from "./Component/Footer";
import './css/style.css';

function App(){
	return(
		<>
		<UIScript />
		<div className="wrap main">	
			<section className="sec-wrap">
				<Header />
				<Content />
				<TopBtn />
				<Footer />
			</section>
		</div>
		</>
	);
}

export default App;