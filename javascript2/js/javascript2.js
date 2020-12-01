			function  f1()
			{
				var point=Math.ceil(Math.random()*100);
				if(point>30)document.getElementById("demo").innerHTML="N";
				else if(point>9)document.getElementById("demo").innerHTML="R";
				else if(point>1)document.getElementById("demo").innerHTML="SR";
				else document.getElementById("demo").innerHTML="SSR";
			}
			var temp=0;
			function f3()
			{
				var a=new Array(),b=new Array();
				var max=0,c=0;
				for(var i=0;i<=9;i++)
				{
					a[i]=Math.ceil(Math.random()*100000);
				}
				for(i=0;i<=9;i++)
				{
					if(a[i]>30000){b[i]="N";}
				   else if(a[i]>5000){b[i]="R";}
				   else if(a[i]>50){b[i]="SR",max=1;}
				   else {b[i]="SSR",max=1;temp=0}
			   }
			   if(temp==90){b[9]="SSR",temp=0;max=1;c++;}
			   if(max==0){b[9]="SR",temp=temp+10;}
			  document.getElementById("demo").innerHTML=b[0]+" "+b[1]+" "+b[2]+" "+b[3]+" "+b[4]+" "+b[5]+" "+b[6]+" "+b[7]+" "+b[8]+" "+b[9];
			}
			 window.onload=function() 
			{
				document.getElementById("p1").style.color="deepskyblue";
				document.getElementsByTagName("p")[3].style.color="red";
				document.querySelectorAll("ul li")[3].style.color="pink"
			} 
		window.onload=function()
			{
				var ob0=document.getElementById("a");
			   var ob2=document.getElementById("obu");
			    var ob=ob0.getElementsByTagName("ol");
			     var ob1=ob[0];
			    ob2.onclick=function()
			    {		
				    var ov1=document.getElementById("b");
				    var txt=document.createTextNode(ov1.value);
				    var oli=document.createElement("li");
				    oli.appendChild(txt);
				    ob1.appendChild(oli);
			    }

			}
			var z=0;
			function f4()
			{
				var i=0;
				var oli=document.querySelectorAll("#a ol li");
				n=oli.length;
				for(i=0;i<=n-1;i++)
				{
					if(z%10==0){oli[i].style.color="red";z++;}
				    else if(z%10==1){oli[i].style.color="orange";z++;}
				    else if(z%10==2){oli[i].style.color="yellow";z++;}
				    else if(z%10==3){oli[i].style.color="green";z++;}
				    else if(z%10==4){oli[i].style.color="lightseagreen";z++;}
				    else if(z%10==5){oli[i].style.color="blue";z++;}
				    else if(z%10==6){oli[i].style.color="purple";z++;}
				    else if(z%10==7){oli[i].style.color="pink";z++;}
				    else if(z%10==8){oli[i].style.color="grey";z++;}
				    else {oli[i].style.color="paleturquoise";z++;}
				}
			}
