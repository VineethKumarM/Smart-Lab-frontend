import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Student_Notification=() => {

  React.useEffect(() => {
    showNotifications()
  },[])

  const [Notifications , setNotifications] = React.useState([])

  const showNotifications = async(req,res) => {
    let response = await axios.get('student/showNotification')
    
    if (response && response.data) {
      setNotifications(response.data.data)
    }
  }
    
    return (
        <div>
        <h1> Student_Notification</h1>
        <div class="notifications">
        <div class="card noti-card text-bg-light noti-card1">
            <h5>Notifications</h5>
        </div>
        {Notifications.map((Notification) =>  

          <div>
          <div class="card noti-card ">
          <h5 class="card-header text-bg-dark">{Notification.labId}</h5>
          <div class="card-body">
            <h5 class="card-title">Lab Join Request</h5>
            <div class="card-dashboard">
              <p class="card-text">{Notification.message}</p>
            
            {Notification.Accepted && ( 
            <div>
            <Link to = {`/lab/${Notification.labId}`}>
            <div  class="btn btn-primary"> Go To Lab </div>
            </Link>
            </div>
            )}
            </div>
          </div>
          </div>

          </div>
        )}
       
          {/* <div class="card noti-card ">
            <h5 class="card-header text-bg-dark">Dr.Kokila Jagadeesh</h5>
            <div class="card-body">
              <h5 class="card-title">Lab Join Request</h5>
              <div class="card-dashboard">
                <p class="card-text">Your request has been for joining lab under the faculty Kokila has been accepted</p>
              <a href="#" class="btn btn-primary">Go To Lab</a>
              </div>
            </div>
          </div> */}
          
    </div>
    </div>
		)
	
}

export default Student_Notification;