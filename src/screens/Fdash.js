import React from "react";

const Faculty_Dashboard=() => {



	
	return (
		<div>
			<h1> Faculty_Dashboard</h1>

			<div style={ {display:"flex", flexDirection: "row"}}>

								<div className="vcard"  id="fac">
									Create Lab
									{/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
										<path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"/>
										<path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"/>
									</svg>
									<button type="button" className="btn btn-primary " onClick={() => {
										localStorage.setItem("userType","faculty");
										setfhide(!fhide);
									}}
										>
										Faculty
									</button> */}
										
								</div>
								<div className= "vcard" id="std">
									Start Lab
									{/* <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
										<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
									</svg>
									<button type="button" className="btn btn-primary" onClick={() => {
										localStorage.setItem("userType","student");
										sethide(!hide);
									}}
									>
										Student
									</button> */}
										
								</div>
							</div>				
			</div>
		)
	
}

export default Faculty_Dashboard;