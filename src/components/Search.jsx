function Search({searchBar}){

    
function search(event){
    searchBar(event.target.value)
}

    return(
        <div>
            <p>safsafnljsafasjfjlasf</p>
              <input type="text" placeholder="Search" onChange={search} />
        </div>

    )
}
export default Search