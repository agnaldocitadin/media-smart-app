# base-app

Imagens e tamanhos necessários para cada mídia:

Resolutions (CSS pixel):

3840 x 2160 - 4K
2560 x 1440 - WQHD
1920 x 1080 - Full HD
1600 x 900
1366 x 768
1280 x 720 - HD
640 x 480 - TV Tubo

Banner de fundo:
2160 = 3840 x 2160
1440 = 2560 x 1440
1080 = 1920 x 1080
900 = 1600 x 900
768 = 1366 x 768
720 = 1280 x 720

Banner do carousel:
2160 = 664 x 374 (100%)
1440 = 443 x 249 (66.71%)
1080 = 332 x 187 (50%)
900 = 277 x 156 (41.71%)
768 = 236 x 133 (35.54%)
720 = 221 x 125 (33.28%)

Banner dos episódeos:
2160 = 614 x 346 (100%)
1440 = 409 x 231 (66.71%)
1080 = 307 x 173 (50%)
900 = 256 x 144 (41.71%)
768 = 218 x 123 (35.54%)
720 = 205 x 115 (33.28%)

------------------------ Media queries -----------------------

/* 480 */
@media (min-height: 480px) and (orientation: landscape) {
}

/* 720p */
@media (min-height: 720px) and (orientation: landscape) {
}

/* 768p */
@media (min-height: 768px) and (orientation: landscape) {
}

/* 900p */
@media (min-height: 900px) and (orientation: landscape) {
}

/* 1080p */
@media (min-height: 1080px) and (orientation: landscape) {
}

/* 1440p */
@media (min-height: 1440px) and (orientation: landscape) {
}

/* 4K */
@media (min-height: 2160px) and (orientation: landscape) {
}


--------------------------------------------------------
Spread com condicional
const { volumeDia } = this.itensMarketShare.get(chave) || 0;


url: "https://dash.akamaized.net/akamai/test/caption_test/ElephantsDream/elephants_dream_480p_heaac5_1.mpd",
// url: "https://dash.akamaized.net/akamai/streamroot/050714/Spring_4Ktest.mpd",
url: "https://media.axprod.net/TestVectors/v6.1-Clear/MultiPeriod_Manifest_1080p.mpd", // Multiplos audios
// url: "https://vm2.dashif.org/dash/vod/testpic_2s/multi_subs.mpd", // Multiplas captions
// url: "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd",
url: "https://irtdashreference-i.akamaihd.net/dash/live/901161/bfs/manifestARD.mpd",


Funcionalidades do TV App:

- Menu com as opções: 
* Perfil
* Busca
* Séries
* Filmes
* Canais ao vivo
* Configurações
* Sair

- Carousel mostrando os itens da seção selecionada: Séries, Filmes e Canais.
- Carousel mostrando os episódeos
- Grade mostrando programação do canal selecionado
- Precisa de um menu para mostrar as categorias
- 