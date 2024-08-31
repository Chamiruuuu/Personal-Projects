const ul = document.getElementById("list-container")
const inputVal = document.getElementById("input-box");

function addList() {
    try {

        if(!isNaN(inputVal.value)){
            inputVal.value = "";
            inputVal.placeholder = "AYAW NUMBER ANIMAL KA";
            return;
        }

        if (inputVal.value === "") {
            inputVal.placeholder = "PLEASE ENTER A TO-DO";
            return; 
        } 

        let listItem = JSON.parse(localStorage.getItem("list"));
        
        if (!Array.isArray(listItem)) {
            listItem = [];
        }
        
        const li = document.createElement('li');
        li.textContent = inputVal.value;

        const removeBtn = document.createElement('button');

        removeBtn.className = 'remove-btn';
        removeBtn.textContent = "remove";
        li.appendChild(removeBtn);

        ul.appendChild(li);

        listItem.push(inputVal.value);
        localStorage.setItem("list", JSON.stringify(listItem));

        inputVal.value = "";
        inputVal.placeholder = "Add";

        removeBtn.addEventListener('click', function() {
            removeItem(li, inputVal.value);
        });

        DoneItem(li);

    } catch (error) {
        console.error("Error adding item to list:", error.message);
    }
}

function DoneItem(li) {
    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
}


function removeItem(listItemElement, itemValue) {
    try {
        let listItem = JSON.parse(localStorage.getItem("list"));

        if (!Array.isArray(listItem)) {
            listItem = [];
        }

        const index = listItem.indexOf(itemValue);
        
        if (index > -1) {
            listItem.splice(index, 1);
        }

        ul.removeChild(listItemElement);

        localStorage.setItem("list", JSON.stringify(listItem));

    } catch (error) {
        console.error("Error removing item from list:", error.message);
    }
}


function removeItem(listItemElement, itemValue) {
    try {
        let listItem = JSON.parse(localStorage.getItem("list"));

        if (!Array.isArray(listItem)) {
            listItem = [];
        }

        const index = listItem.indexOf(itemValue);
        
        if (index > -1) {
            listItem.splice(index, 1);
        }

        ul.removeChild(listItemElement);

        localStorage.setItem("list", JSON.stringify(listItem));

    } catch (error) {
        console.error("Error removing item from list:", error.message);
    }
}


function updatedList() {
    try {
        
        let listItem = JSON.parse(localStorage.getItem("list"));

        if (!Array.isArray(listItem)) {
            listItem = [];
        }

        listItem.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = "remove";
            
            li.appendChild(removeBtn);
            ul.appendChild(li);
            
            removeBtn.addEventListener('click', function() {
                removeItem(li, item);
                
            });
            DoneItem(li);
        });
    } catch (error) {
        console.error('Error updating list:', error.message);
    }
}

updatedList();
