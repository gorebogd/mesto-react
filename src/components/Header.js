import logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Проект Mesto" className="header__logo"/>
        </header>
    )

}
export default Header;