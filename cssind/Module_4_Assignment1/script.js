var names=new Array();
names[0]="Andrea";
names[1]="Jeremie";
names[2]="Bryn";
names[3]="John";
names[4]="Marry";
names[5]="Kristina";
names[6]="Joe";
names[7]="William";
names[8]="Julia";
names[9]="Jasmine";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}