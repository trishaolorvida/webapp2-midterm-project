const url = 'https://jsonplaceholder.typicode.com/photos';
const Container = document.getElementById("ulGrid")



function load() {
    fetch(url).then((response)=> {
        response.ok ? response.json()
        .then((photos)=> {
            let Str = ''
            const ItemCount = 100;
            for (let i = 0; i < ItemCount; i++){
                Str += 
                `<li class="Item" id="Item${i}">
                    <div id="displayContainer${i}">
                        <div class="itemImageDiv">
                            <img alt="Image" id="itemImage${i}" class="itemImage">
                        </div>
                        <div class="itemTitleDiv" id="itemTitleDiv${i}">
                            <p id="itemTitleContent${i}" class="itemTitleContent"></p>
                        </div>
                    </div>
                </li>`;
            }
            Container.innerHTML = Str;

            for (let i = 0; i < ItemCount; i++) {
                let ImageContainerID = "itemImage" + i;
                let ImageContainer = document.getElementById(ImageContainerID);
                let Pictures = photos[i].url;
                ImageContainer.src = Pictures;
            }
            for (let i = 0; i < ItemCount; i++){
                let combined = "itemTitleContent" + i;
                let photoTitle = photos[i].title;
                let title = photoTitle.split(" ").slice(0, 3).join(" ");
                let titleContent = document.getElementById(combined);
                titleContent.textContent = title;
            } 
            for (let i = 0; i < ItemCount; i++){

                let ID = "itemImage" + i;
                let IDHolder = document.getElementById(ID);

                let ID2 = "itemTitleContent" + i;
                let ID2Holder = document.getElementById(ID2);

                IDHolder.addEventListener("click", (e)=>{
                    e.preventDefault();
                    console.log("URL: "+photos[i].url + "\nPhotoID: " + photos[i].id + "\nTitle: " + photos[i].title + "\nAlbumId: " + photos[i].albumId);
                    console.log(ID2Holder.textContent);
                });

                let ID3 = "Item" + i;
                let openFloater = document.getElementById(ID3);
                const floater = document.getElementById('popupContainer');
                openFloater.addEventListener("click", (e)=>{
                    e.preventDefault;
                    floater.style.display = 'flex';
                    document.body.classList.add('noScroll');

                    const Image = document.getElementById('floatingImage');
                    Image.src = photos[i].url;

                    const Title = document.getElementById('floatingTitle');
                    Title.textContent = ID2Holder.textContent;

                    const AlbumID = document.getElementById('SpanAlbumID');
                    AlbumID.innerHTML = `<b>Album ID:&nbsp</b> ` + photos[i].albumId + `th Album`;

                    const PhotoID = document.getElementById('SpanPhotoID');
                    PhotoID.innerHTML = `<b>Photo ID:&nbsp</b>` + photos[i].id;

                    const fullTitle = document.getElementById('SpanTitle');
                    fullTitle.innerHTML = `<b>Title:&nbsp </b>` + photos[i].title;

                    const URLImage = document.getElementById('SpanURL');
                    URLImage.innerHTML = `<b>URL:&nbsp</b> ` + photos[i].url;

                });

                const closeFloater = document.getElementById('closeFloater');
                closeFloater.addEventListener("click", (e)=>{
                    e.preventDefault();
                    floater.style.display = 'none';
                    document.body.classList.remove('noScroll');
                });
            }
        }):pass
    });
}

load()
