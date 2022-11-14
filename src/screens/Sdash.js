import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Student_Dashboard=() => {

	const history = useNavigate()
	var i=0;
	
	const user = JSON.parse(localStorage.getItem("user"))
	const [list,setlist] = useState(null)
  	const auth = localStorage.getItem("jwt"); 
	const [fact,setfact] = useState("");
	const [labdata,setlabdata] = useState(null)

	React.useEffect(() => {
		fetchDetails()
		fetchD()
	}, []);
	
	const fetchDetails = async() => {
		const response = await axios.get('/allfaculties', {
			headers: {
				"Authorization": auth,
			},
		})
		if(response){
			
			setlist(response.data.faculties)
		}
	}

	const fetchD = async() => {
		const response = await axios.get('/student/mylabs', {
			headers: {
				"Authorization": auth,
			},
		})
		if(response){
			
			setlabdata(response.data.lab)
			console.log(labdata);
		}
	}

	const sendReq = async() => {
		if(fact==1) {
			alert("No real faculties");
			return;
		}
		try {
			let res = await fetch("/joinfaculty", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					"Authorization": auth,
				},
				body: JSON.stringify({
					facultyId:fact
				}),
			})
			let data = await res.json();
			if (data.message) {

					// let resp = await fetch("/studentDetails", {
					// 	method: "get",
					// 	headers: {
					// 		"Content-Type": "application/json",
					// 		// "Authorization": auth,
					// 	}
					// })

					// let udata = resp.json();

					localStorage.setItem("user",JSON.stringify(data.user))
					alert(data.message + "	Please Refresh");
					// history("/Sdash")
					
				} else {
					alert("Error"); 
					history("/");
				}
		}
		catch (err) {
			console.log(err);
		}
		
	}

	console.log(user.labJoinStatus);
	if(user.labJoinStatus==-1) {
		return (
			<div>
			<Navbar></Navbar>
			<div class="faculty devices">
				<div class="faculty-form card text-bg-dark">

						<div class="form-row align-items-center ">
						<div class="col-auto my-1">
							<label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Choose Faculty</label>

							{
								list ? <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" aria-label="Faculty" 
									onChange={e => {
										setfact(e.target.value)
									}}
								>
								<option selected>Faculty</option>
								 {
									list.map( f => 		
										<option value={f.id}>{f.name}</option>
									) 
								} 			
								</select> :
								<select class="custom-select mr-sm-2" id="inlineFormCustomSelect" aria-label="Faculty">
									<option selected>No Faculty Registered</option>
									
								</select>
							}

						</div>
						<div class="col-auto my-1">
							<button type="submit" class="btn btn-primary" onClick={sendReq}>Submit</button>
						</div>
						</div>
				</div>
             </div>
			 </div>
			
		)
		
	}
	else if(user.labJoinStatus==0) {
		return(
			<div>
				<Navbar></Navbar>
				<div class="card text-bg-light">
					<h5 class="card-header text-bg-light">Faculty request pending</h5>
					{/* <div class="card-body">
						<h5 class="card-title">Faculty : {user.faculty}</h5>
						<a href="#" class="btn text-bg-success">Active</a>
					</div> */}
				</div>
			</div>
		)
	}
	else {
	return (
		<div>
			<Navbar></Navbar>
			<div class="card text-bg-light">
					<h5 class="card-header text-bg-light">{labdata.name}</h5>
					<p>labdata.facultyId</p>
					{/* <div class="card-body">
						<h5 class="card-title">Faculty : {user.faculty}</h5>
						<a href="#" class="btn text-bg-success">Active</a>
					</div> */}
				</div>
		</div>
			
		)
	}
}

export default Student_Dashboard;