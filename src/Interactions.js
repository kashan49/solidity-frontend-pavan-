import {React, useState} from 'react'


const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();


	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
		console.log(txt);
		setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
			<div>
				<form onSubmit={transferHandler}>
					<h3> Transfer Plot </h3>
						<p> Reciever Address </p>
						<input type='text' id='recieverAddress'/>

						<p> No.of plots </p>
						<input type='number' id='sendAmount' min='0' step='1'/>

						<button type='submit' className="s-btn">Send</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
	
}

export default Interactions;
