window.addEventListener("load", function() {
  document.getElementById("new-dog").addEventListener("submit", function() {
  	event.preventDefault();
  	var elements = this.elements;
  	for (var i = 0; i < elements.length; i++) {
  		if (elements[i].type === "text") {
  		  console.log(`${elements[i].name}: ${elements[i].value}`);
  		}
    }

  	var newDog = new Dog(elements["name"].value, elements["breed"].value);
  	var dogRow = '<tr><td>';
  	dogRow += newDog.name;
  	dogRow += '</td><td>';
  	dogRow += newDog.breed;
  	dogRow += '</td></tr>';

  	var table = document.getElementById("dog-table-body");
		var row = table.insertRow(-1);
		row.innerHTML = dogRow;
		this.reset();
	});
});
