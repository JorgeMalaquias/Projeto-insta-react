import IonIcon from "./ion-icon";



function Logo() {
    return (
        <div class="logo">
            <IonIcon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}
function LogoMobile() {
    return (
        <div class="logo-mobile">
            <IonIcon name="logo-instagram" />
        </div>
    );
}
function InstagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    );
}
function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}



function Icones() {
    const icons = [{name:"paper-plane-outline"},{name:"compass-outline"},{name:"heart-outline"},{name:"person-outline"}];
    return (
        <div class="icones">
            {icons.map(IonIcon)}
        </div>
    );
}
function IconesMobile() {
    return (
        <div class="icones-mobile">
            <IonIcon name="paper-plane-outline" />
        </div>
    );
}


export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>
    );
}