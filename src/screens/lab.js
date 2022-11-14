import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "../components/Navbar";

const Lab=() => {

	const history = useNavigate();
	const [user,setuser] = useState(	JSON.parse(localStorage.getItem("user")))
	

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
            <div class="col">
              <div class="card text-bg-dark">
                <img src="Images/bulborg.jpg" class="card-img-top" alt="..." width="190px" height="214px"/>
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Iot Bulb</h5>
                  <div class="status">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-dark">
                <img src="./Images/bridge.png" class="card-img-top" alt="..." width="190px" height="214px"/>
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Iot Bulb</h5>
                  <div class="status">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-dark">
                <img src="Images/bridge.png" class="card-img-top" alt="..." width="190px" height="214px"/>
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Smart Bridge</h5>
                  <div class="status"></div>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
                <div class="card text-bg-dark">
                  <img src="Images/cctv.jpg" class="card-img-top" alt="..." width="190px" height="214px"/>
                  <div class="card-body card-dashboard">
                    <h5 class="card-title">Camera</h5>
                    <div class="status">
                      <label class="switch">
                          <input type="checkbox"/>
                          <span class="slider round"></span>
                        </label>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="row row-cols-2 row-cols-md-4 g-4 d1">
            <div class="col">
              <div class="card text-bg-dark">
                <img src="Images/invisible-wave-spectrum-can-be-controlled.jpg" class="card-img-top" alt="..." width="190px" height="214px"/>
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Iot Bulb</h5>
                  <div class="status">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-dark">
                <img src="Images/alexa.jpg" class="card-img-top" alt="..." width="190px" height="214px"/ >
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Iot Bulb</h5>
                  <div class="status">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-dark">
                <img src="Images/bridge.png" class="card-img-top" alt="..." width="190px" height="214px"/ >
                <div class="card-body card-dashboard">
                  <h5 class="card-title">Smart Bridge</h5>
                  <div class="status">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                      </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
                <div class="card text-bg-dark">
                  <img src="Images/cctv.jpg" class="card-img-top" alt="..." width="190px" height="214px"/ >
                  <div class="card-body card-dashboard">
                    <h5 class="card-title">Camera</h5>
                    <div class="status">
                      <label class="switch">
                          <input type="checkbox"/>
                          <span class="slider round"></span>
                        </label>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
	)
	
}

export default Lab;