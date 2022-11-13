import React,{useRef,useEffect,useState} from "react";
import { Toast,Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Home=() => {


	const [modalState,setmodalState] = useState(localStorage.getItem("state")? false : true)
	const history=useNavigate()

	function openModal() {
		setmodalState(!modalState)
	}
	return (
		<div class="home " >
		 	{/* <MapModal show = {modalState} action={() => openModal} onHide={() => setmodalState(false)}></MapModal> */}
			
			<h1>
				Home
			</h1>
		
		</div>
			
		)
	
}

export default Home;