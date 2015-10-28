var questions = [];
var theClass = ['Yoski','Freddy','Andrew','Oliver','Will','Stuart','Stephen','Chance','Griffen','Peter'];
i = 0;

function Question(parameter1,parameter2,parameter3){
	this.question = parameter1;
	this.answer = parameter2;
	this.difficulty = parameter3;
}

questions[0] = new Question("When should I use jQuery and when should I use native JavaScript","Use jQuery whenever you find it easier. jQuery is just super JavaScript!",2);
questions[1] = new Question("Is GitHub the same thing as Git","No. GitHub is a website and service that hosts gir repositories. Git is a source control tool that runs in Linux",2);
questions[2] = new Question("How do I select an element in an array in JavaScript","The array variable name with [] after it. Inside, put the element you want.",1);
questions[3] = new Question("Explain the Bootstrap Grid system.","The screen is broken up into 12 columns. A breakpoint exists by default at 4 points. You place elements in the grid by choosing how many columns each should have.",4);
questions[4] = new Question("What is the syntax for including a stylesheet in an html doc A script",'<link rel="stylesheet" type="text/css" href=""> & <script type="text/javascript" src=""></script>',3);
questions[5] = new Question("What does CDN stand for","content delivery network",3);
questions[6] = new Question("What language is compass written in","Ruby",4);
questions[7] = new Question("What is the difference between transition and transform in CSS3","Transition is the time taken for animation between css changes. Transform is an actual CSS transformation such as rotating on the x-axis",3);
questions[8] = new Question("What is the git command to compile the changes from one branch to another","git merge",5);
questions[9] = new Question("Is it possible to remove a JavaScript listener from an element If so, what is it If not, is there a way to override them","Yes. In jQuery, .off(). removeEventListener() in JS. ",3);
questions[10] = new Question("How do you add a 1px border in CSS","border: solid 1px black",1);
questions[11] = new Question("What is the Linux command to make a directory","mkdir",2);
questions[12] = new Question("How many digits long is a random number (Math.random) in JavaScript (not counting leading 0)",16,3);
questions[13] = new Question("How can you tell if something is a property or a method in JS","() or not.",1);
questions[14] = new Question("When should you use an array instead of an object","If the variables need to be ordered without specific names.",2);
questions[15] = new Question("When an element is floated, does the parent inherit it's height","Only if the parent has overflow:hidden or is also floated",3);
questions[16] = new Question("What are the elements of the LAMP stack","Linux, Apache, MySQL, PHP", 3);



$(document).ready(function(){
	$('#ask button').click(function(){
		var rand = Math.floor(Math.random() * questions.length);
		var rand2 = Math.floor(Math.random() * theClass.length);
		$('#question-wrapper h1').html(questions[rand].question + ', <span class="student-name">' + theClass[rand2] + '?</span>');
		$('#question-wrapper .diff').text(questions[rand].difficulty);
	});	
});

function AddressBook(Name,Email,Address,Address2,City,State,Zip,Phone,Website){
	this.Name = Name;
	this.Email = Email;
	this.Address = Address;
	this.Address2 = Address2;
	this.City = City;
	this.State = State;
	this.Zip = Zip;
	this.Phone = Phone;
	this.Website = Website;
}

address1 = new AddressBook("Robert Bunch","rob@digitalcrafts.com","11","","Cherokee");



