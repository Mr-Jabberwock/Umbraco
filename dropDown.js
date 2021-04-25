//This is the web component itself
class DropDown extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
       
        <div>
        <input autocomplete="off" id="input" list="selector" onkeyup="search()" placeholder="Search for your favorite hero">
        <select onClick="clicked()" id="selector" data-search="true">
           <option id="option1" value="" disabled selected>Click to see the results of your search</option>
           <option value="Superman">Superman</option>
           <option value="Batman">Batman</option>
           <option value="Spiderman">Spiderman</option>
           <option value="Umbraco tech support">Umbraco tech support</option>
        </select>
        <strong id="selectedOption" class="selectText">You selected</strong>
        <p id="selectedElement"></p>
        </div>
       
        `
    }
}

window.customElements.define('dropdown-search', DropDown);

//function which is executed when a dropdown option is clicked.
//it starts the select animation, and sets the text at the bottom for the chosen value
function clicked(){
    var animation = document.getElementById("selectedOption");

    var text = document.getElementById("selectedElement");
    text.innerText = $('#selector').find(":selected").text();
    animation.style.animation = "text 3s";

    var newAnimation = animation.cloneNode(true)
    animation.parentNode.replaceChild(newAnimation, animation);

    
}

//function that makes the filtered search of the dropdown elements
function search(input, options){
    var input = document.getElementById("input").value;
    var dropdown = document.getElementById("selector");
    var options = dropdown.getElementsByTagName('option');
    
  
    var optionValue = "";
    for(var i = 0; i < options.length; i++){
        
        //this if/else is for testing. If the elements in the options array have a "value" attribute
        //(they come from the html), the extract the value. If not (they're just string values from a test),
        //do not attempt to fetch a "value" attribute
        if(options[i].value){
            optionValue = options[i].value.indexOf(input);
            console.log("Option"+ optionValue)
        }else{
            optionValue = options[i]
        }
        
        //This is for the filtering itself. If the search criteria matches a value on the array of options,
        //then do not hide this given element (keep it shown). Otherwise hide it
        if(optionValue > -1 ){ 
            options[i].hidden = false;
        }else{
            options[i].hidden = true;
            
        }
    }

    return false;
}

//export the earch function so that it can be used for testing
module.exports = search;