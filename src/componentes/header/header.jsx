import '../header/header.css'

function Header(){
    return(
        <header>
        <a href="#" class="logo"><i class="ri-car-line"></i></a>

        <ul class="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviço</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    

        <div class="main">
            <a href="#" class="user"><i class="ri-user-line"></i></a>
        </div>
    </header>  
    )
}

export default Header