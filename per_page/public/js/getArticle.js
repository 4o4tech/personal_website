
//ie XDR request
function IEhdrRequest(){

	var xdr = new XDomainRequest();  // 

	xdr.onload = function(){


	}

	xdr.onerr = function(){
		alert("Error");
	}

	xdr.timeout = 3000;
	xdr.ontimeout = function(){
		alert("request out of time");
	}

		
	xdr.open(
		"GET",   //DOMString method   "GET", "POST", "PUT", "DELETE"
		"http://int-double.com/api/get_recent_posts/?callback=show_posts_widget&read_more=More&count=1"// the file is requestd
			);

	xdr.send(null);
}


// chorme firefox