time.innerHTML = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
})
date.innerHTML = new Date().toLocaleDateString()

const homeButton = () =>{
    window.location="App-store/index.html"
}