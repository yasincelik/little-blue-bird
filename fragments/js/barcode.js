


// see https://github.com/phonegap-build/BarcodeScanner/blob/master/README.md

  $scope.scan = function() {
  
    try {
	    var scanner = window.cordova.require("cordova/plugin/BarcodeScanner");
	    
	
	    scanner.scan(
	      function (result) {
	          alert("We got a barcode\n" +
	                "Result: " + result.text + "\n" +
	                "Format: " + result.format + "\n" +
	                "Cancelled: " + result.cancelled);
	      }, 
	      function (error) {
	          alert("Scanning failed: " + error);
	      }
	    );
	    
	    $scope.scanner = JSON.stringify(scanner);
    }
    catch(err) {
      alert('Error:'+err.message);
    }
  }