import React from "react";
import "../styles/checkmark.css";
import SithImg1 from "../images/SCard9.jpg";
import SithImg2 from "../images/SCard8.jpg";
import SithImg3 from "../images/SCard7.jpg";
import SithImg4 from "../images/SCard6.jpg";
import SithImg5 from "../images/SCard5.jpg";
import SithImg6 from "../images/SCard4.jpg";
import SithImg7 from "../images/SCard3.jpg";
import SithImg8 from "../images/SCard2.jpg";
import SithImg9 from "../images/SCard1.jpg";
import SithImg10 from "../images/SCard10.jpg";
import JediImg1 from "../images/JCard10.jpg";
import JediImg2 from "../images/JCard9.jpg";
import JediImg3 from "../images/JCard8.jpg";
import JediImg4 from "../images/JCard7.jpg";
import JediImg5 from "../images/JCard6.jpg";
import JediImg6 from "../images/JCard5.jpg";
import JediImg7 from "../images/JCard4.jpg";
import JediImg8 from "../images/JCard3.jpg";
import JediImg9 from "../images/JCard2.png";
import JediImg10 from "../images/JCard1.jpg";

const CharactersCards = function(props){
    
    if(props.Side == "Jedi")
    {
        return(
            <font color="#fff">
                    <div class="characters-div">
                        <div class="card">
                            <img src={JediImg1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Люк Скайуокер</h5>
                                <p class="card-text">Люк Скайуокер, пожалуй, самый влиятельный джедай всех времен. Он не только разрушил Империю, но и положил начало новой эре джедаев и взял на себя роль Великого Магистра. Как и Мастер Йода, Люк Скайуокер так же одарен своим световым мечом, как и своим разумом.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Йода</h5>
                                <p class="card-text"> Йода не только прожил дольше всех, пережил Приказ 66 и понимал Силу так, как это понимали очень немногие, но он также отвечал за обучение некоторых из величайших существующих джедаев. Люк Скайуокер, граф Дуку, Мейс Винду, Кит Фисто и почти каждый юноша, готовый начать обучение джедаям.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Энакин Скайуокер</h5>
                                <p class="card-text">его способности к Силе не имеют себе равных. Известный как Избранный, Энакин обучался у Оби-Вана Кеноби и вырос во времена великих беспорядков. Он сражался в Войнах клонов, тайно любил, обучил одного из самых любимых падаванов в истории «Звездных войн» и бросил вызов всему, что значит быть джедаем.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Оби-Ван Кеноби</h5>
                                <p class="card-text">И Йода, и Квай-Гон Джинн обучали Оби-Вана Кеноби. Обучение этих двоих оказалось плодотворным для Кеноби, поскольку он был первым джедаем за 1000 лет, победившим лорда ситхов в битве. Оби-Ван Кеноби также был джедаем, ответственным за обучение двух самых влиятельных джедаев в истории.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Мейс Винду</h5>
                                <p class="card-text">Мейс Винду был одним из самых могущественных джедаев, когда-либо заседавших в Высшем совете. Его любимый боевой стиль был тем, которым владели очень немногие… и не зря. Ваапад требует, чтобы практикующий направил свою внутреннюю тьму в бой. Благодаря своему пониманию Ваапада Мейс мог сражаться со своими противниками так, как не могли другие джедаи.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Квай-Гон Джинн</h5>
                                <p class="card-text">Помимо обучения Оби-Вана Кеноби, Квай-Гон Джинн обнаружил Энакина Скайуокера. Куай-Гон Джинн настоял на обучении Энакина, когда все другие Мастера возражали против него. И именно Куай-Гон Джинн столкнулся с первым лордом ситхов за 1000 лет, когда Дарт Мол напал на него на Татуине. Он был одним из самых влиятельных джедаев, которые когда-либо существовали.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Кит Фисто</h5>
                                <p class="card-text">Кит Фисто был генералом-джедаем, который мог сражаться на суше и в воде. Хотя он был великим джедаем на суше, его способности в воде укрепили его место в этом списке. Наблюдать, как Кит Фисто движется под водой, было все равно, что наблюдать за самым изящным танцем в истории. Это трогательно, красиво, поэтично и пугающе одновременно.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Луминара Ундули</h5>
                                <p class="card-text">Луминара Ундули так же велика, как и любой джедай. Вот почему. Во время нападения на Джеонозис Ундули помогла задержанному мастеру-джедаю Оби-Вану Кеноби, его падавану Энакину Скайуокеру и неизвестной возлюбленной Скайуокера, сенатору Падме Амидале. Она не только была одним из самых доверенных и уважаемых членов, но ее отправляли на самые важные миссии.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Пло-Кун</h5>
                                <p class="card-text">Несмотря на то, что он был способным дуэлянтом, Пло-Куна чаще всего можно было встретить в кресле пилота. Наблюдать за тем, как он работает с дыхательными путями, было все равно, что наблюдать, как танцор движется идеально синхронно с музыкой вокруг него. Пло-Кун был мастером стратегии, которого часто призывали во время Войн клонов.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={JediImg10} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ки-Ади Мунди</h5>
                                <p class="card-text">Ки-Ади Мунди, один из немногих, кто заседал в Совете джедаев до того, как стал мастером, был замком, чтобы попасть в этот список. Джедаи относились к Ки-Ади Мунди с таким уважением, что ему было позволено нарушить одно из самых важных правил существования джедая. Позволь мне объяснить. Джедаям запрещено привязываться. Это означает, что они не могут жениться или влюбиться.</p>
                            </div>
                        </div>
                    </div>
            </font>
        )
    }
    else
    {
        return(
            <font color="#fff">
                    <div class="characters-div">
                        <div class="card">
                            <img src={SithImg1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Реван</h5>
                                <p class="card-text">После возвращения с Темной стороны Реван, в отличие от многих джедаев, прошедших похожим путем, смог удержать баланс, став своего рода серым джедаем. Ему в равной степени были подвластны манипуляции и Светлой, и Темной Силой, что сделало Ревана одним из самых могущественных носителей Силы за всю историю вселенной «Звездных войн».</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Вейдер</h5>
                                <p class="card-text">Когда-то героический рыцарь-джедай по имени Энакин Скайуокер, Дарт Вейдер был соблазнен темной стороной Силы. Вейдер был навсегда изранен поражением на Мустафаре и превратился в кибернетически усиленного Лорда Ситхов. На заре Империи Вейдер возглавил уничтожение Ордена джедаев и поиски выживших. Но в нем все еще было добро...</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Нихилус</h5>
                                <p class="card-text">Тёмный владыка ситхов, который возглавлял их в период после Гражданской войны джедаев. Ученик Дарт Треи, он — один из немногих уцелевших в Битве за Maлакор V, и один из трёх членов Триумвирата ситов. Дарт Нихилус вместе с Дартом Сионом выгнали Tрею из Триумвирата. После этого Нихилус возглавил чистку, направленную против рыцарей-джедаев, тем самым уничтожив почти весь их Орден.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Бэйн</h5>
                                <p class="card-text">Древний и легендарный Владыка ситхов, Дарт Бейн увидел, что старые традиции ситхов в конечном итоге зашли в тупик. Слишком часто склоки ситхов в их стремлении к власти разрушали тщательно продуманные планы. Через тысячу лет после уничтожения ситхов рыцарями-джедаями, Бэйн ввел правило двух ситхов: одновременно должны были существовать только два активных ситха - Темный Лорд, воплощающий силу, и ученик, жаждущий ее.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Сидиус</h5>
                                <p class="card-text">Темная сторона Силы - это путь ко многим способностям, которые некоторые считают противоестественными, а Шив Палпатин - самый печально известный последователь ее доктрин. Коварный, могущественный и злой до глубины души, Дарт Сидиус восстановил ситхов и уничтожил Орден джедаев. Живя двойной жизнью, он также был Палпатином, сенатором Набу и призрачной угрозой.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Малак</h5>
                                <p class="card-text">Дарт Малак — человек мужского пола, носивший титул Тёмного лорда ситхов в период Гражданской войны джедаев. Однако, прежде чем принять звание лорда ситхов, он был известен под именем Алек, данном ему при рождении на планете Квели во Внешнем Кольце. Дарт Малак стал одним из выдающихся фехтовальщиков своего времени. В поединках он применял наиболее агрессивную манеру фехтования.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg7} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Мол</h5>
                                <p class="card-text">Смертоносный и ловкий лорд ситхов, обученный Дартом Сидиусом, Дарт Мол был грозным воином и интриганом. Он владел устрашающим двулезвийным световым мечом и сражался с угрожающей свирепостью. Хотя он пал в битве с Оби-Ваном Кеноби, забрака с Датомира оказалось гораздо труднее уничтожить, чем предполагалось вначале.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg8} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Граф Дуку</h5>
                                <p class="card-text">Граф Дуку был мастером Ордена джедаев. Однако он отвернулся от джедаев во взрослом возрасте, и всё, что для этого потребовалось – непокорный характер и потеря того, о ком он искреннее заботился. Обладая одним из самых уникальных световых мечей, граф Дуку считался одним из величайших дуэлянтов в галактике.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg9} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Плэгас</h5>
                                <p class="card-text">Конец Энакина Скайуокера начался именно со страниц истории Плэгаса. Пытаясь найти ключ к вечной жизни, в том числе за счёт манипуляций с мидихлорианами, Дарт Плэгас держал своего ученика Дарта Сидиуса в полном курсе дел. Более того, Дарту Плэгасу стала известна и причина страха Энакина Скайуокера, которая позже сыграет роль в его переходе на тёмную сторону.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={SithImg10} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Дарт Вишейт</h5>
                                <p class="card-text">Крайне могущественный ситх, который, к тому же, ещё и гиперчувствителен к силе. Счётчик его убийств сдвинулся с нулевой отметки в 10 лет, когда он одной лишь силой мыли убил собственного отца. Вишейт затмевает многих мастеров тёмной силы. Его способности позволили ему стать практически бессмертным, преодолев отметку правления в более чем 1000 лет.</p>
                            </div>
                        </div>
                    </div>
            </font>
        )
    }
}

export default CharactersCards;