function addToDate(id) {
	var div = document.getElementById(id);
	
	newForm = 	"<div class='new-form-container'>"+
				"<div class=\"budget-data-row new-row\">" +
				"<div>"+
				"<label for='dateBox'>Date: </label>" +
				"<select name='dateBox' id='dateBox'>";
				
				for (var x = 1; x <= 31; x++) {
					newForm += "<option value='"+x+"'>" + x +"</option>";
				}
				
	newForm +=	"</select>" +
				"</div>" +
				"<div id=\"description\"><label for='description'>Description:</label><input type='text' name='description' size='18' /></div>" +
				"<div><label for='amount'>Amount:</label><input type='text' name='amount' size='7' value='0' id ='amount'/></div>" +
				"<div><label for='creditORdebit'>Type:</label>" +
				"<select name='creditORdebit' id='creditORdebit'>" +
				"<option value='debit'>Debit</option>" +
				"<option value='credit'>Credit</option>" +
				"</select>" +
				"</div>" +
				"<div><input type='submit' value='Save' /><input type='button' value='Cancel' /></div>" +
				"</div>" +
				"</div>";
				
							
	div.innerHTML += newForm;
	document.getElementById('test').innerText = newForm;

}
