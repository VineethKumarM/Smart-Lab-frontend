import React, { useState } from "react";

const Student_Dashboard=() => {

  const [data,setdata] = useState("");

 

	// fetch('/allfaculty', {
	// 		method:"get",
			
	// 	}).then(
	// 		res => res.json()
	// 	).then(ress =>{
	// 		setdata(ress.data)

	// 	}).catch(
	// 		error => {
	// 			console.log(error);
	// 		}
	// 	)

	const user = localStorage.getItem("user")
	var i=0;

	if(user.faculty) {
		return(
			<div>
				<h1> Student_Dashboard</h1>
				<div class="card text-bg-light">
					<h3 class="card-header text-bg-light">Details</h3>
					<div class="card-body">
						<h5 class="card-title">Faculty : {user.faculty}</h5>
						<a href="#" class="btn text-bg-success">Active</a>
					</div>
				</div>
			</div>
		)
	}
	else {
	return (
		<div>
			<h1> Student_Dashboard</h1>
			<div class="faculty devices">
				<div class="faculty-form card text-bg-dark">

						<div class="form-row align-items-center ">
						<div class="col-auto my-1">
							<label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Choose Faculty</label>
							<select class="custom-select mr-sm-2" id="inlineFormCustomSelect" aria-label="Faculty">
							<option selected>Faculty</option>
							<option value="1">Kokila</option>
							<option value="1">Kokila</option>
							<option value="1">Kokila</option>

							{/* {
								data.map((f) => {
									
									<option value={i++}>{f}</option>
								})
							} */}
							</select>
						</div>
						<div class="col-auto my-1">
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
						</div>

				</div>
             </div>
			 </div>
			
		)
	}
}

export default Student_Dashboard;