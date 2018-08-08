import React from 'react';
import './Resume.css';
import logo from './udacity_logo.png';
import jeonghun from './jeonghun.JPG';
import chicago from './chicago.JPG';
import horse from './horse.JPG';
import indy500 from './indy500.JPG';

const resume = (props) => {

	return (
		<div className="Resume">
			<div className="Headerpart Container">
				<div className="Headerlogo">
					<img src= {logo} alt="Logo" height="120" width="120"/>
				</div>
				<div className="Profile">
					<p className="Nameresume">JEONGHUN OH</p>
					<p className="Namejob">FRONT-END NINJA</p>
				</div>
			</div>
		
			<div className="Profilephoto Container">
				<img src= {jeonghun} alt="Jeonghun" height="100%" width="100%"/>
			</div>
			<div className="Container">
				<p className="Feature">Featured Work </p>
			</div>
			<div className="Featureproject">
		
					<div>
						<img className="Featured" src= {chicago} alt="featured work1" width="400" height="300"/>
						<p className="Featuretitle">Chicago
						</p>
						<p className="Featuresite">https://ismartedu.net
						</p>
				    </div>
					<div>
						<img className="Featured" src= {indy500} alt="featured work2" width="400" height="300" />
						<p className="Featuretitle">Indy500
						</p>
						<p className="Featuresite">https://smartvoca.com
						</p>
					</div>
					<div>
						<img className="Featured" src= {horse} alt="featured work3" width="400" height="300"/>
						<p className="Featuretitle">Horse
						</p>
						<p className="Featuresite">https://ohedit2000.com
						</p>
					</div>
			</div>
		</div>
		)
};
export default resume;