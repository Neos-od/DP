function Intro(){
	return(
		<div className="intro">
			<div className="title">
				<div className="title-m">비지니스에 힘이 되는 디자인<small>,</small></div>
				<div className="title-t">
					<span className="txt-t">
						<img src="images/logo_t.svg" className="color" alt="logo t" />
						<img src="images/logo_t_w.svg" className="white" alt="logo t w" />
					</span>
					<span className="hidden-t">
						<img src="images/old_logo_t1.png" className="basic" alt="old logo t1" />
						<img src="images/old_logo_t2.png" className="color" alt="old logo t2" />
					</span>
				</div>
				<div className="title-p">
					<span className="txt-p">
						<img src="images/logo_p.svg" className="color" alt="logo p" />
						<img src="images/logo_p_w.svg" className="white" alt="logo p w" />
					</span> 
					<span className="hidden-t">
						<img src="images/old_logo_p1.png" className="basic" alt="old logo p1" />
						<img src="images/old_logo_p2.png" className="color" alt="old logo p2" />
					</span>
				</div>
			</div>
			<div className="skip-btn"><a href="">Skip</a></div>
		</div>
	);
}

export default Intro;