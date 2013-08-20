


// see https://github.com/phonegap-build/BarcodeScanner/blob/master/README.md

  $scope.scan = function() {
    alert('scan fn');
  
    var scanner = window.cordova.require("cordova/plugin/BarcodeScanner");
    
    alert(scanner);

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