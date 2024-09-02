
        let inputs = document.getElementById("inp");
        let text = document.querySelector(".text");

        function Add() {
            if (inputs.value.trim() === "") {
                alert("Please enter a task");
            } else {
                // Create new list item
                let newele = document.createElement("li");
                newele.innerHTML = `${inputs.value} <i class="fas fa-trash-alt"></i>`;
                
                // Append the new list item to the unordered list
                let ul = document.createElement("ul");
                ul.appendChild(newele);
                text.appendChild(ul);
                
                // Clear input field
                inputs.value = "";
                
                // Add event listener for the remove icon
                newele.querySelector("i").addEventListener("click", function() {
                    ul.remove();
                });
            }
        }
