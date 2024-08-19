<?php
// Função para gerar o código do iframe para um vídeo do YouTube
function gerarIframe($videoId) {
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/' . $videoId . '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

// IDs dos vídeos (substitua com os IDs reais dos vídeos que você encontrou)
$videoIds = [
    'vc2pAXyDjEI', // Exemplo de ID de vídeo
    'OUTRO_ID_1',  // Substitua pelos IDs reais
    'OUTRO_ID_2'
];

// Geração dos iframes
foreach ($videoIds as $videoId) {
    echo gerarIframe($videoId) . '<br>';
}
?>
