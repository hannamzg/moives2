function Footer() {
    return(
        <footer className="border-top pt-3 py-2 text-center" >
        <span>
        <i className="bi bi-film me-2"></i>movies
        </span>
        <span className="mx-2">&copy;hanna mzeget</span>
        <span>{new Date().getFullYear()}</span>
        <div onClick={()=>alert("fuckkkkkkkkkkkkkkk")}>
            <h1>click me</h1>
        </div>
      </footer>
    )    
}

export default  Footer