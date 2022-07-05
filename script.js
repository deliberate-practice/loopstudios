const sidebar = document.getElementById("sidebar")
const openSidebar = document.getElementById("openSidebar")
const closeSidebar = document.getElementById("closeSidebar")

openSidebar.addEventListener("click", (e) => {
    sidebar.style.display = "flex !important"
})

closeSidebar.addEventListener("click", (e) => {
    sidebar.style.display = "none !important"
})