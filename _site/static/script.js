document.addEventListener('DOMContentLoaded', function() {
    console.log("Loaded");
});

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.add("open");
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.remove("open");
}