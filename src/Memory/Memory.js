import React from 'react';
import './Memory.css';
import './memory_app.js';
import 'font-awesome/css/font-awesome.min.css';


const memory = (props) => {

	return (
		
<body>

    <div className="container">
        <header>
            <h1>Matching Game</h1>
        </header>

        <section className="Score-panel">
        	<ul className="Stars">
        		<li><i className="fa fa-star"></i></li>
        		<li><i className="fa fa-star"></i></li>
        		<li><i className="fa fa-star"></i></li>
        	</ul>

        	<span class="moves">3</span> Moves

            <div class="restart">
        		<i className="fa fa-repeat"></i>
        	</div>
        </section>

        <ul class="deck">
           
        </ul>
    </div>

    <script src="./memory_app.js"></script>
</body>


		)
};
export default memory;