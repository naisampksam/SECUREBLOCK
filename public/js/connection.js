
var script = document.createElement('script');
script.src = '/js/jquery-3.2.1.min.js';
document.head.appendChild(script);


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];


var TestingContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_sender",
				"type": "address"
			},
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_datatype",
				"type": "string"
			}
		],
		"name": "newTransact",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "revokestatus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "findTransactionsCount",
		"outputs": [
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidate_key",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_sender",
				"type": "address"
			},
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "findTransaction",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTransactionCount",
		"outputs": [
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "findTransactions",
		"outputs": [
			{
				"components": [
					{
						"name": "sender",
						"type": "address"
					},
					{
						"name": "receiver",
						"type": "address"
					},
					{
						"name": "datatype",
						"type": "string"
					},
					{
						"name": "status",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_key",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTransactions",
		"outputs": [
			{
				"components": [
					{
						"name": "sender",
						"type": "address"
					},
					{
						"name": "receiver",
						"type": "address"
					},
					{
						"name": "datatype",
						"type": "string"
					},
					{
						"name": "status",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "updateStatusAccept",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_key",
				"type": "address"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_aadhar",
				"type": "string"
			},
			{
				"name": "_creditno",
				"type": "uint256"
			},
			{
				"name": "_creditpass",
				"type": "string"
			},
			{
				"name": "_debitno",
				"type": "uint256"
			},
			{
				"name": "_debitpass",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			}
		],
		"name": "newUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getAllTransaction",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "updateStatusReject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "Updated",
		"type": "event"
	}
]); 

var TestingC = TestingContract.at('0x6b3a89678b01c22325fa572769d8b10da783bd55');
console.log(TestingC);



function register_info(){
	console.log("hello");
	if($("#name").val()!="" && $("#Aadhar").val()!="" && $("#creditcardnumber").val()!="" && $("#creditcardpassword").val()!="" && $("#debitcardnumber").val()!="" && $("#debitcardpassword").val()!="" && $("#password").val()!="" ){
  var email= $("#name").val();
	var account=web3.personal.newAccount($("#f").val());
	console.log(account);
	TestingC.newUser(account,$("#name").val(),$("#Aadhar").val(),$("#creditcardnumber").val(),$("#creditcardpassword").val(),$("#debitcardnumber").val(),$("#debitcardpassword").val(),$("#password").val(),{from: web3.eth.defaultAccount, gas:3000000});
	alert("User Successfully added\nDonor ID : "+account);
	$("#name").val("");
	$("#Aadhar").val("");
	$("#creditcardnumber").val("");
	$("#creditcardpassword").val("");
	window.location = "/sendmail?valid="+account+"&mailid="+email;
	
}

}

function hello(){
	console.log("hello");
	console.log($("#password1").val());
	if($("#name").val()!="" && $("#Aadhar").val()!="" && $("#creditcardnumber").val()!="" && $("#creditcardpassword").val()!="" && $("#debitcardnumber").val()!="" && $("#debitcardpassword").val()!="" && $("#password1").val()!="" ){
  var email= $("#name").val();
	var account=web3.personal.newAccount($("#f").val());
	console.log(account);
	TestingC.newUser(account,$("#name").val(),$("#Aadhar").val(),$("#creditcardnumber").val(),$("#creditcardpassword").val(),$("#debitcardnumber").val(),$("#debitcardpassword").val(),$("#password1").val(),{from: web3.eth.defaultAccount, gas:3000000});
	alert("User Successfully added\nSave your ID  : "+account);
	$("#name").val("");
	$("#Aadhar").val("");
	$("#creditcardnumber").val("");
	$("#creditcardpassword").val("");
	window.location = "/sendmail?valid="+account+"&mailid="+email;
	
}
}

//login page
function upload(){     
    if(document.getElementById("password").value==''||document.getElementById("username").value=='')
        {
            alert('Please enter your User id');
            return false;
            
        }
    var userid 		= document.getElementById("username").value;
    var password 	= document.getElementById("password").value;
	//console.log(password1);
	console.log(userid);
    if((userid.localeCompare("admin")==0)&&(password.localeCompare("admin")==0)){
		
		$.post("http://localhost:3000/", {email:userid}, function(data){
			console.log('hello login');
			console.log(data);
			$("#head").text("hellll");
			if(data==='done')          
            {
				window.location.href="/admin";
				return true;            
			}

		});
		console.log('hello logiwwn');

		return false;
        
    }
TestingC.getUser(userid,function(error, result){
	
        var pass =result[6];
		console.log(result[6]);//error
		

        
        if ((password.localeCompare(pass)==0)){
			$.post("http://localhost:3000/", {email:userid}, function(data){
				console.log('hello login');
				console.log(data);
				$("#head").text("hellll");
				if(data==='done')          
				{
					window.location.href="/admin";
					return true;            
				}
	
			});




                       }



    });
};





//verify
$("#verify_transaction").click(function() {

	if($("#u_id").val()!="" ){
   
	var receipt=web3.eth.getTransactionReceipt($("#u_id").val());
	console.log(receipt);
	alert("Transaction details: Block Number: "+receipt.blockNumber+" Block Hash: "+receipt.blockHash+" Gas Used: "+receipt.gasUsed);
	
	//$("#result").html("<br><table class='table'> <tr><th>Verify Transaction Details  </th><td>"+receipt.blockNumber+"</td></tr><tr><th>Total Vote  </th><td>"+"test"+"</td></tr><tr><td></td><td></td></tr></table>");

	//console.log(trhash);
}

});



function request(){
	console.log("hellll");
	var filed=$( "#field option:selected" ).text();
	console.log(filed);
	console.log($("#sender").val());
	TestingC.newTransact($("#sender").val(),$("#id").val(),$("#field").val(),{from: web3.eth.defaultAccount, gas:3000000});
	alert("Request send.")
	
}
//new balance code

$("#balance").click(function() {

	
   
	var u_id=document.getElementById('user_key').value;

	TestingC.getUser(u_id,function(error, result){
		alert("Your account balance is "+result[4])
		console.log(result);//error



	});	



});

//View all fund requests
function view_all_request(){
	var name=$("#u_id").val()
		TestingC.getTransactionCount(function(error, result){
			console.log(result.toString());
		html1='"<div class="funkyradio-success"><table class="table"><tr><td>ID</td><td>Sender</td><td>Receiver</td></tr>';
		for(var i=0;i<result.toString();i++){
			TestingC.getAllTransaction(i,function(error, result){	
				console.log(result);
				console.log(result[1]);	//votes
				console.log(result[0]);				//name
				console.log(result[2].toString());	//id
				var id=result[2].toString();
				console.log(name);
				//html1=html1+"name+id";
				if(name.localeCompare(result[1])==0 && result[3] ==0){
				html1+= '<tr><td>'+result[0]+'</td><td>'+result[1].toString()+'</td><td>'+result[2]+'</td><td><input type="button" onClick="updateStatus(\''+result[1]+','+result[0]+',2'+'\')" value="Approve"></td><td><input type="button" onClick="updateStatus(\''+result[1]+','+result[0]+',1'+'\')" value="Reject"></td></tr>';
				console.log(html1);
				$("#req_list").html(html1);
				}
			});

		}
		$("#req_list").html('</table></div>');
	});

}

function view_all_data(){
	TestingC.getTransactionCount(function(error, result){
		var data =$("#u_id").val();
		console.log(result.toString());
	html1='"<div class="funkyradio-success"><table class="table"><tr><td>ID</td><td>Sender</td><td>Receiver</td></tr>';
	for(var i=0;i<result.toString();i++){
		TestingC.getAllTransaction(i,function(error, result){	
			console.log(result);
			console.log(result[0]);	//votes
			console.log(data);				//name
			console.log(result[2].toString());	//id
			var id=result[2].toString();
			var num='i';
			console.log(data.localeCompare(result[0]))
			//html1=html1+"name+id";
			if((data.localeCompare(result[0])==0) && result[3] == 1 ){
			html1+= '<tr><td>'+result[0]+'</td><td>'+result[1].toString()+'</td><td>'+result[2]+'</td><td><input type="button" onClick="show_data(\''+result[1]+','+result[2]+'\')" value="Show"></tr>';
			console.log(html1);
			$("#req_list").html(html1);
			}
		});

	}
	$("#req_list").html('</table></div>');
});
}

function given_permissions(){
	TestingC.getTransactionCount(function(error, result){
		var data =$("#u_id").val();
		console.log(result.toString());
	html1='"<div class="funkyradio-success"><table class="table"><tr><td>To</td><td>Data Field</td></tr>';
	for(var i=0;i<result.toString();i++){
		TestingC.getAllTransaction(i,function(error, result){	
			console.log(result);
			console.log(result[0]);	//votes
			console.log(data);				//name
			console.log(result[3]);	//id
			var id=result[2].toString();
			console.log(data.localeCompare(result[0])==0);
			console.log(result[3]==1);
			//html1=html1+"name+id";
			if((data.localeCompare(result[1])==0) && result[3] == 1 ){
				console.log(result[3]);
			html1+= '<tr><td>'+result[1]+'</td><td>'+result[2]+'</td><td><input type="button" onClick="revoke_permission(\''+result[1]+','+result[2]+'\')" value="Revoke"></tr>';
			console.log(html1);

			$("#my_data").html(html1);
			}
			console.log(result[2]);

		});

	}
	$("#my_data").html('</table></div>');
});
}

function view_my_file(){
	var data =$("#u_id").val();
	html1="";
	TestingC.getUser(data,function(error, result){
		console.log(result);	
		html1='<br><div class="funkyradio-success"><table class="table"><tr><td>Name</td><td>'+result[0]+'</td></tr>';
		html1+='<tr><td>Aadhar</td><td>'+result[1]+'</td></tr>';
		html1+='<tr><td>Credit Card Number</td><td>'+result[2]+'</td></tr>';
		html1+='<tr><td>Credit card password</td><td>'+result[3]+'</td></tr>';
		html1+='<tr><td>Debit Card Number</td><td>'+result[4]+'</td></tr>';
		html1+='<tr><td>Debit card Password</td><td>'+result[5]+'</td></tr>';
		html1+='</table></div>';
		//html1+= '<tr><td>'+result[0]+'</td><td>'+result[1].toString()+'</td><td>'+result[2]+'</td><td><input type="button" onClick="show_data(\''+result[1]+','+result[2]+'\')" value="Show"></tr>';
		$("#my_profile").html(html1);


	});



}


function show_data(data){
	console.log(data);
	var temp= data.split(',');
	console.log(temp[1]);
	TestingC.getUser(temp[0],function(error, result){	
		console.log(result);
		if(temp[1].localeCompare('Name')==0){
			alert("Name " +result[0]);
		}
		else if(temp[1].localeCompare('Aadhar')==0){
			alert("Aadhar "+result[1]);

		}
		else if(temp[1].localeCompare('Credit card No')==0){
			alert("Credit card Number "+result[2]);
		}
		else if(temp[1].localeCompare('Credit card Password')==0){
			alert("Credit Card Password "+result[3]);
		}
		else if(temp[1].localeCompare('Debit card No')==0){
			alert("Debit Card Number "+result[4]);
		}
		else if(temp[1].localeCompare('Debit card password')==0){
			alert("Debit card Number "+result[5]);
		}
	});


}


function updateStatus(a){
	console.log(a);
	var temp= a.split(',');
	console.log(temp[2]);
	TestingC.getTransactionCount(function(error, result){
		console.log(result.toString());
	for(var i=0;i<result.toString();i++){
		TestingC.getAllTransaction(i,function(error, result){	
			console.log(result[3]+' '+temp[2]);
			if((result[1].localeCompare(temp[0])==0) && (result[0].localeCompare(temp[1])==0) && result[3] ==0){
                if (temp[2] == 2){
					console.log("Here 2");
					this.test(i);
                }
                else if (temp[2] == 1){
					console.log("EEEEE"+ i)
					TestingC.updateStatusReject(i-1,{from: web3.eth.defaultAccount, gas:3000000});
					alert("Request Rejected")
				}
				console.log("out");
			}
			console.log("out out");

		});

	}
});
}

function test(i){
	TestingC.updateStatusAccept(i-1,{from: web3.eth.defaultAccount, gas:3000000});
	alert("Request Accepted")

}


function revoke_permission(a){
	console.log(a);
	var temp= a.split(',');
	console.log(temp[1]);
	var id =$("#u_id").val();
	TestingC.getTransactionCount(function(error, result){
		
	for(var i=0;i<result.toString();i++){
		TestingC.getAllTransaction(i,function(error, result){	
			console.log(result[1].localeCompare(temp[0])==0);
			console.log(result[0].localeCompare(id)==0);
			console.log(result[3] ==1);
			console.log(result[1].localeCompare(id)==0)
			if((result[1].localeCompare(temp[0])==0) && (result[1].localeCompare(id)==0) && result[3] ==1){
               
					TestingC.revokestatus(i-1,{from: web3.eth.defaultAccount, gas:3000000});
				
				//console.log("out");
			}
			console.log("out out");

		});

	}
});
}








