

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.name}
            </div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.suggestImg} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.info}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Sugestoes() {
    const sugestao = [{
        suggestImg: "assets/img/bad.vibes.memes.svg",
        name: "bad.vibes.memes",
        info: "Segue você"
    },
    {
        suggestImg: "assets/img/chibirdart.svg",
        name: "chibirdart",
        info: "Segue você"
    },
    {
        suggestImg: "assets/img/razoesparaacreditar.svg",
        name: "razoesparaacreditar",
        info: "Novo no Instagram"
    },
    {
        suggestImg: "assets/img/adorable_animals.svg",
        name: "adorable_animals",
        info: "Segue você"
    },
    {
        suggestImg: "assets/img/smallcutecats.svg",
        name: "smallcutecats",
        info: "Segue você"
    }
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestao.map(Sugestao)}
        </div>
    );
}


function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}
function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario userImg="assets/img/catanacomics.svg" userName="catanacomics" name="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}