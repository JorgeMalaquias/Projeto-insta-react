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



function Stories() {
    const storiesList = [{ imageSrc: "assets/img/9gag.svg", user: "9gag" },
    { imageSrc: "assets/img/meowed.svg", user: "meowed" },
    { imageSrc: "assets/img/barked.svg", user: "barked" },
    { imageSrc: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
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










function Posts() {
    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" />
                        meowed
                    </div>
                    <div class="acoes">
                        <IonIcon name="ellipsis-horizontal" />
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <IonIcon name="heart-outline" />
                            <IonIcon name="chatbubble-outline" />
                            <IonIcon name="paper-plane-outline" />
                        </div>
                        <div>
                            <IonIcon name="bookmark-outline" />
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" />
                        barked
                    </div>
                    <div class="acoes">
                        <IonIcon name="ellipsis-horizontal" />
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <IonIcon name="heart-outline" />
                            <IonIcon name="chatbubble-outline" />
                            <IonIcon name="paper-plane-outline" />
                        </div>
                        <div>
                            <IonIcon name="bookmark-outline" />
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







function Esquerda() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}






function SideBar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" />
                        <div class="texto">
                            <div class="nome">bad.vibes.memes</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/chibirdart.svg" />
                        <div class="texto">
                            <div class="nome">chibirdart</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" />
                        <div class="texto">
                            <div class="nome">razoesparaacreditar</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            <div class="nome">adorable_animals</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/smallcutecats.svg" />
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}





export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <SideBar />
        </div>
    );
}