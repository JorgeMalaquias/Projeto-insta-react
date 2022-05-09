import IonIcon from "./ion-icon";

export default function FundoMobile() {
    
    const icons=[{name:"home"},{name:"search-outline"},{name:"add-circle-outline"},{name:"heart-outline"},{name:"person-outline"}];
    return (
        <div class="fundo-mobile">
            {icons.map(IonIcon)}
        </div>
    );
}