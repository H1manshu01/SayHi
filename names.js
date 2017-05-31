'use strict';

// Return a Silly Name
function sillyname() {
    // Basic Random
    function rnd(n) { return Math.floor(Math.random()*n) }

    // First Name
    return ["Himanshu","Shivani","Mohit","Chanki","Saurabh",
    "Pooja","Shikha","Gaurav","Deepak","Ashok","Rishabh","Manoj",
    "Pappu","Shivam","Karan","Deepali","Jyoti","Deepa","Narendra",
    "Dr","Lokendra","Kripal","Rajendra",
    "Advitiya","Kirti","Manvendra"][rnd(25)] +

    // Last Name
    ["Sharma","Panday","Gautam","Saxena","Varshney","Chaturvedy","Goyal","Shrivastav","Gaud","Singh","jain","Bhardwaj",
	"Sharma","Panday","Gautam","Saxena","Varshney","Chaturvedy","Goyal","Shrivastav","Gaud","Singh","jain","Bhardwaj"][rnd(25)];
}
