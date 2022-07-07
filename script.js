let sidebar = document.getElementById("sidebar")
let openSidebar = document.getElementById("openSidebar")
let closeSidebar = document.getElementById("closeSidebar")

openSidebar.addEventListener('click', () => {
    sidebar.style.display = "block"
})

closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none"
})