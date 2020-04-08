	let c=document.getElementById("images");
	c.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
	let d=document.getElementById("head");
	function mouseover(element)
	{
		c.style.backgroundImage="url("+element.src+")";
		d.style.backgroundColor="#d8e8cc";
		d.style.borderRadius="50px";
		element.style.border="2px solid red";
		element.style.borderRadius="50px";
		d.style.padding="10px";
		
	}
	function mouseout(element1)
	{
		c.style.backgroundImage="linear-gradient(#647ad1,#a1abd4)";
		d.style.backgroundColor="transparent",
		element1.style.borderRadius="20px",
		element1.style.border="0px solid red"
	}
	let dob=document.getElementById("dob");
	dob.style.backgroundImage="linear-gradient(#05e4fc,#b9eaf0)";
	dob.style.marginTop="50px";
	dob.style.marginBottom="50px";
	let color=document.getElementById("colors");
	color.style.backgroundImage="linear-gradient(#74e026,#a0de73)";
	color.style.marginTop="50px";
	color.style.marginBottom="50px";
	function generateRandomColor()
	{
	    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	    return randomColor;
    
	}
	function random1()
	{
		let e=generateRandomColor();
		let Bcolor=document.getElementById("colors");
		let Fcolor=document.getElementById("tex");
		Bcolor.style.backgroundImage="linear-gradient("+e+","+e+")"
		Fcolor.style.color=generateRandomColor();
	}
	let out=document.getElementById("output");
	function Cage()
	{
		let date1 = new Date();
		let  dob= document.getElementById("input").value;
		let date2=new Date(dob);
		let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //date format (dd/mm/yyyy)
		if (pattern.test(dob)) 
		{
			    var y1 = date1.getFullYear(); //getting current year
			    var y2 = date2.getFullYear(); //getting dob year
			    var age = y1 - y2;           //calculating age 
			    out.innerHTML="==>You are "+age+" years old!!";
			    out.style.color="#2809ed";
		} 
		else 
		{
		    out.innerHTML="==>Invalid date format. Please Input in (dd/mm/yyyy) format!";
		    out.style.color="red";
		    
		}
	}
