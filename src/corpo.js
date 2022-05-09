import Esquerda from "./esquerda";
import SideBar from "./sidebar";



export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <SideBar />
        </div>
    );
}