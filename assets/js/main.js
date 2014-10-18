var squareoneAPI = (function () {

	var public = {};

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("squareoneAPI loaded...");
		
	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", squareoneAPI.init);
