window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		/*calling a function calculateTip
		which will calculate the tip for the bill.*/
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for further calculations.*/
	let amount = document.querySelector('#amount').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	/*if statement will work when user presses
		calculate without entering values. */
	//so will display an alert box and return.
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	//now we are checking number of persons
	
	/*calculating the tip by multiplying total-bill and type of
	service; then dividing it by number of persons.*/
	//fixing the total amount upto 2 digits of decimal
	let total = (amount * service);
	total = total.toFixed(2);

	//finally displaying the tip value
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
var total = parseFloat(document.getElementById("total").value);
var tip = parseFloat(document.getElementById("percentage").value) * 0.01;
  
var totalTip = amount * tip;
var totalBill = amount + totalTip;