import React from 'react'
import './Feedback.css'
export default function Feedback() {
    return (
            <div class="Clients" style={{display: "flex", flexWrap:"wrap"}}>
			<div class="maxWidth">
				<h1 style={{marginTop:"50px"}}><span style={{fontWeight:"600"}} >Acceptors</span> Feedback</h1>
				<div class="clients-content">
					<div class="card">
						<div class="box">
							<p>Now that's how you make life easy.<br />Loved it!<br /> Thankyou for the great service.<br />I might just make it a regular thing.</p>
							<div class="text">Kashif Ali</div>
							from Karachi<br/>
							
							</div>
						</div>
						<div class="card">
						<div class="box">
							<p>I used there full day service and I must say that the workers were extremely professional and made my house shine from top to bottom.</p>
							<div class="text">Sidra</div>
							from Islamabad<br/>
							
							</div>
						</div>
						<div class="card">
							<div class="box">
								<p>I used there full day service and I must say that the workers were extremely professional and made my house shine from top to bottom.</p>
								<div class="text">bushra Fatima</div>
								from Lahore<br/>
								
								</div>
							</div>
							
					</div>
                    </div>
				</div>
     
    )
}
