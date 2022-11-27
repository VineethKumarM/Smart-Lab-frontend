import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "../components/Navbar";

const SLab=() => {

	const history = useNavigate();
	const [user,setuser] = useState(	JSON.parse(localStorage.getItem("user")))
	const [lights,setLights] = useState([])
    // const [selects,setSelects] = useState()
    var selected = [];
    React.useEffect(() => {
		getdata()
	}, []);
	
 
  const auth = localStorage.getItem("jwt"); 
  const getdata = async ()=> {
    try{
        let res= await fetch("/allLights",{
            headers: {
            // "Authorization": auth,
            },
        })
        let data = await res.json();
		
        if (data.error) {
            alert(data.error);
        } else {
            console.log(data);
            setLights(data.lights)
            
        }
    } 
    catch (err) {
      console.log(err);
    }
  }
  const [hide,sethide] = useState(false);
	const [fhide,setfhide] = useState(false);

    const toggleDevice = (id,state) => {
        if(state) {
            fetch("/LightOff", {
             id:id
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.success);
            })
        }
        else {
            fetch("/LightOff" ,{
                id:id
               })
               .then(res => res.json())
               .then(data => {
                   console.log(data.success);
               })
        }
    }

	return  (
	<div>
      <Navbar></Navbar>
		<div class="devices">
            <div class="card text-bg-light">
                <h3 class="card-header text-bg-light">Details</h3>
                <div class="card-body card-dashboard">
                <h5 class="card-title">Faculty : {user.name}</h5>
                <a href="#" class="btn text-bg-success">Active</a>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-4 g-4 d1">
                <div className={hide ? "vcard hide" : "vcard"}  id="first">
                    
                    {
                        lights && lights.map(light => 
                            <div class="col">
                            <button onClick={() => {
                                selected.push(light)
                            
                            }

                            }>
                                light.data.name
                            </button>
                            </div>
                        )
                    }
                    <button onClick={() => {
                        sethide(!hide);
                        setfhide(!fhide)
                    }}>Submit</button>
                
                </div>

                <div>
                {
                    selected.length > 0 ? 
                    selected.map(item => 
                       
                        <div class="col">
                            <div class="card text-bg-dark">
                                <img src="./Images/bridge.png" class="card-img-top" alt="..." width="190px" height="214px"/>
                                <div class="card-body card-dashboard">
                                <h5 class="card-title">item.name</h5>
                                <div class="status">
                                    <label class="switch">
                                        <input type="checkbox" onChange={() => {
                                            toggleDevice(item.id,item.state)
                                        }} />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                </div>
                            </div>
                        </div>
                       
                        
                    ) : <div></div>
                }
                </div>
                
            </div>
        </div>
    </div>
	)
	
}

export default SLab;