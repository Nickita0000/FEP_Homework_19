const galleryTitles = document.querySelector('#albums_titles')
const galleryPictures = document.querySelector('#pictures')

GalleryApi
    .getListOfTitles()
    .then ((title) => {
        renderGalleryTitle(title)
        showGalleryPictures(title[0].id)
    })
    .catch(e => showError(e))


galleryTitles.addEventListener('click', onGalleryTitlesClick)

function onGalleryTitlesClick(e) {
    const target = e.target
    const currentContact = findClickTitle(target)
    const indexOfSelectedTitle = currentContact.dataset.id
    showGalleryPictures(indexOfSelectedTitle)
}

function findClickTitle(area) {
    return area.closest("a")
}

function renderGalleryTitle(title) {
    const html = title.map(htmlGalleryTitle).join('')

    galleryTitles.innerHTML = html
}

function renderGalleryPictures(title) {
    const html = title.map(htmlGalleryPictures).join('')

    galleryPictures.innerHTML = html
}

function htmlGalleryTitle(title) {
    return `<a data-id="${title.id}">${title.title}</a>`
}

function htmlGalleryPictures(picture) {
    return `<img src="${picture.url}" alt="${picture.title}">`
}

function showGalleryPictures(id) {
    GalleryApi
        .getListOfPictures(id)
        .then ((pictures) => {
            renderGalleryPictures(pictures)
        })
        .catch(e => showError(e))
}

function showError(e) {
    alert(e.message)
}