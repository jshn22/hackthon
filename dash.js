// Open and close the popup
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Add a new note inside the selected category box
document.getElementById("addNoteBtn").addEventListener("click", function () {
    let noteText = document.getElementById("noteText").value.trim();
    let category = document.getElementById("categorySelect").value;

    if (noteText === "") {
        alert("Please enter a note before adding.");
        return;
    }

    addNoteToCategory(category, noteText);
    document.getElementById("noteText").value = ""; // Clear input
    closePopup();
});

// Function to add note inside selected category
function addNoteToCategory(category, noteText) {
    let categoryContainer = document.getElementById(category); // Get category div

    if (!categoryContainer) {
        console.error("Category not found:", category);
        return;
    }

    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML =`
    <p>${noteText}</p>
    <button class ="delete-btn" onclick="deleteNote(this)">🗑️</button>
    `;

    categoryContainer.appendChild(noteDiv);
}

// Function to delete a note
function deleteNote(button) {
    button.parentElement.remove();
}

// Function to show different sections (Notes, Lists, Recording, etc.)
function showSection(section) {
    alert(`Showing section: ${section} (Functionality can be added later)`);
}
function logout() {
    window.location.href = "index.html"; // Change to your login page
}
// Toggle Sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}

// Logout Function
function logout() {
    window.location.href = "index.html"; // Change this to your login page
}
