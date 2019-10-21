console.log('Welcome to Notes App. This is app.js');
show_notes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {


    }
    else if (notes != 0) {

        notesObj = [];
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    show_notes();
})
//function to show elements from local storage.
function show_notes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (element, index) {
        //using backtick
        html += ` 
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id = "${index}" onclick = "delete_note(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
        // $(index) id takes that index(indicated in forEach loop) 
        //on which it is clicked.
    });
    let notes_element = document.getElementById("notes");
    if (notesObj.length != 0) {
        notes_element.innerHTML = html;

        //console.log("Add notes success!")


    }
    else {
        notes_element.innerHTML = `No notes added.`;
    }
}

//function to delete a note.
function delete_note(index) { //the index of an array to delete the note and it
    //is derived from the this.id method
    console.log('Note Deleted', index);//testing fetching of index no
    let notes = localStorage.getItem("notes");//reading the local storage
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);//all the notes are included int the notesObj
        // they will be delted and localStorage is set up.
    }
    notesObj.splice(index, 1);
    //slice takes the index and the number of element
    //to be deleted.
    //now we have to push notesObj into the localStorage, i.e. update localStorage
    //again.
    localStorage.setItem("notes", JSON.stringify(notesObj));
    show_notes();//calling the show_notes function
}