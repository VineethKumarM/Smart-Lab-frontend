import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "../components/Navbar";

const Login = () => {
	const history = useNavigate();
	const [phoneNumber, setphoneNumber] = useState("");
	const [password, setpassword] = useState("");
	const { state, dispatch } = useContext(UserContext);
	const [viewNotif, setviewNotif] = useState(false);
	const [color,setcolor] = useState("green");
	const toggleviewNotif = () => {
		setviewNotif(!viewNotif);
		// history("/")                                                          
	}
	const [user,setUser] = useState("");
	const userType = localStorage.getItem("userType");
	// if(!userType) history("/");
	const PostData = async () => {
		if(!userType) {
			alert("please referesh and select user type")
			return
		}
		if(userType=="faculty") {
			try {
				let res = await fetch("/facultysignin", {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						phoneNumber,
						password,
					}),
				})
				let data = await res.json();
				// console.log();
				if (data.error) {
					alert(data.error);
				} else {
					// alert("success")
					console.log(data);
					localStorage.setItem("jwt", data.token);
					localStorage.setItem("user", JSON.stringify(data.user));
					dispatch({ type: "USER", payload: data.user });
					history("/Fdash")
					
				}
			}
			catch(err) {
				console.log(err);
			}
		}
		else {
			try {
				let res = await fetch("/studentsignin", {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						phoneNumber,
						password,
					}),
				})
				let data = await res.json();
				console.log();
				if (data.error) {
					alert(data.error);
				} else {
					// alert("success")
					console.log(data);
					localStorage.setItem("jwt", data.token);
					localStorage.setItem("user", JSON.stringify(data.user));
					dispatch({ type: "USER", payload: data.user });
					history("/Sdash")
					
				}
			}
			catch(err) {
				console.log(err);
			}
		}
	};

	return (
		<div>
		<Navbar></Navbar>
		
		<div className="mycard">
			<div className="card auth-card">
				<h2>Login</h2>
				<p className="card-text">
					<input
						type="text"
						value={phoneNumber}
						onChange={(e) => setphoneNumber(e.target.value)}
					/>
				</p>
				<p className="card-text">
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
				</p>
				<button className="btn btn-primary" onClick={() => PostData()}>
					Login
				</button>
				<p>
					<Link to="/register"> Don't have an account?</Link>
				</p>
			</div>
		</div>
		</div>
	);
};

export default Login;
