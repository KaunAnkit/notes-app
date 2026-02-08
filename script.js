const API = "http://localhost:3000/notes"

async function fetchNotes() {
    
    const res = await fetch(`${API}/notes`)

    const notes = await res.json();

    const container = document.getElementById("notes");
    container.innerHTML = ""

    notes.forEach(notes => {

        const div = document.createElement("div");

        div.className = "notes"

        


    });
}

