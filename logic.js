let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "❌ Delete";
    delbtn.classList.add("delete");

    // Attach delete event to the new button
    delbtn.addEventListener("click", function () {
        let par = this.parentElement;
        par.remove();
    });

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = ""; // Clear the input field
});
