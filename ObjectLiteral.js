/*Create a StudentDetails Object literal and insert the following properties to the object literal: StudentName, DOB, Skills
Create a nested object as Address which contains properties as state, city, country,pincode.
Add the new property as eyecolor and mother name of Student.
Delete one property from your choice and display the Object details.*/

// Object literal
var StudentDetails={
			StudentName:"Rahul",
			DOB:"Dec 07,1989",
			Skills:"HTML5, javaScript",
			Address:{
				state: "Haryana",
				city:"Gurgaon",
				country:"India",
				pincode:122001
			}
	};

// Add Property
StudentDetails["eyecolor"]="black";
StudentDetails["motherName"]="Renuka Gautam";

// Delete proeperty
delete StudentDetails["DOB"];

// Show result in console.
console.log(StudentDetails);