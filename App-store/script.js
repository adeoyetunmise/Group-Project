time.innerHTML = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
})

const goHome = () => {
    window.location.href = "/Home/index.html"
}