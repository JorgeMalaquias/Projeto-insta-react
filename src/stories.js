import IonIcon from "./ion-icon";

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imageSrc} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
}



export default function Stories() {
    const storiesList = [{ imageSrc: "assets/img/9gag.svg", user: "9gag" },
    { imageSrc: "assets/img/meowed.svg", user: "meowed" },
    { imageSrc: "assets/img/barked.svg", user: "barked" },
    { imageSrc: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { imageSrc: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { imageSrc: "assets/img/respondeai.svg", user: "respondeai" },
    { imageSrc: "assets/img/filomoderna.svg", user: "filomoderna" },
    { imageSrc: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }];

    return (
        <div class="stories">
            {storiesList.map(Story)}
            <div class="setinha">
                <IonIcon name="chevron-forward-circle" />
            </div>
        </div>
    );
}