export function removeFromlibrary(e) {
    if(e.target.name==="isInLibrary"){
        window.localStorage.removeItem(e.target.id)
        e.target.innerText="Removed"
    }
}
