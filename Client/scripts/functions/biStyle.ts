// Функция background-image которую можно юзать в jsx: <div style={biStyle('/example.png')}>Hello bro</div>
// Не нужно также прописывать абсолютный путь до картинки, прописывать путь представляя, что мы находимся в public

function biFormat(image) {
    return image ? `url(${image})` : 'none';
}

export default function biStyle(img) {
    return {backgroundImage: Array.isArray(img) ? img.map(src => biFormat(src)).join(', ') : biFormat(img)};
}