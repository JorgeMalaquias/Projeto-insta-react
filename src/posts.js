import IonIcon from "./ion-icon";




function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imageSrc} />
                {props.user}
            </div>
            <div class="acoes">
                <IonIcon name="ellipsis-horizontal" />
            </div>
        </div>
    );
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.postImage} />
        </div>
    );
}

function Acoes() {
    const icons = [{ name: "heart-outline" }, { name: "chatbubble-outline" }, { name: "paper-plane-outline" }];
    return (
        <div class="acoes">
            <div>
                {icons.map(IonIcon)}
            </div>
            <div>
                <IonIcon name="bookmark-outline" />
            </div>
        </div>
    );
}
function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.likedUserImg} />
            <div class="texto">
                Curtido por <strong>{props.likedUser}</strong> e <strong>outras {props.number} pessoas</strong>
            </div>
        </div>
    );
}
function Fundo(props) {

    return (
        <div class="fundo">
            <Acoes />
            <Curtidas likedUserImg={props.likedUserImg} likedUser={props.likedUser} number={props.number} />
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <Topo imageSrc={props.topo.imageSrc} user={props.topo.user} />
            <Conteudo postImage={props.conteudo.postImage} />
            <Fundo likedUserImg={props.curtidas.likedUserImg} likedUser={props.curtidas.likedUser} number={props.curtidas.number} />
        </div>
    );
}

export default function Posts() {
    const posts = [{
        topo: { imageSrc: "assets/img/meowed.svg", user: "meowed" },

        conteudo: { postImage: "assets/img/gato-telefone.svg" },

        curtidas: {
            likedUserImg: "assets/img/respondeai.svg",
            likedUser: "respondeai", number: "101.523"
        }
    },
    {
        topo: { imageSrc: "assets/img/barked.svg", user: "barked" },

        conteudo: { postImage: "assets/img/dog.svg" },

        curtidas: { likedUserImg: "assets/img/adorable_animals.svg", likedUser: "adorable_animals", number: "99.159" }
    }
    ]
    return (
        <div class="posts">
            {posts.map(Post)}
        </div>
    );
}