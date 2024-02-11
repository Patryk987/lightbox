class SimpleLightbox {

    imageList = [];
    number = 1;

    constructor(parameters) {
        this.initDiv = parameters.initDiv;
        this.imageSource = parameters.imageSource;
        this.title = parameters.title ? parameters.title : "";

        this.init();
    }

    // Initialization

    init() {
        if (document.querySelector(this.initDiv)) {

            this.#readImages();
            this.#loadPopup();
            this.#hiddenDiv();

            this.#active()
            this.#activeImagesClick();

        } else {
            console.warn("Starting div not found");
        }

    }

    #active() {
        this.#activeClosePopup();
        this.#activeNextImage();
        this.#activePrevImage();
    }

    #readImages() {
        var images = document.querySelector(this.imageSource).querySelectorAll('img');
        images.forEach(element => {
            let src = element.getAttribute('src');
            let alt = element.getAttribute('alt');
            this.imageList.push({
                "src": src, "alt": alt
            })
        });
    }

    #loadPopup() {

        var container = document.querySelector(this.initDiv);
        var popupLightbox = document.createElement('popup-lightbox');

        popupLightbox.setAttribute('title', this.title);
        popupLightbox.setAttribute('src', '');
        popupLightbox.setAttribute('altImage', '');
        popupLightbox.setAttribute('actualPage', '1');
        popupLightbox.setAttribute('pagesNumbers', this.imageList.length);


        container.appendChild(popupLightbox);
    }

    // Activation button 

    #activeImagesClick() {
        var images = document.querySelector(this.imageSource).querySelectorAll('img');
        images.forEach(element => {
            element.addEventListener("click", () => {

                let src = element.getAttribute("src");
                let alt = element.getAttribute("alt");
                for (let index = 0; index < this.imageList.length; index++) {
                    if (src == this.imageList[index].src) {
                        this.number = index;
                        break;
                    }
                }

                this.changePhoto(src, alt);
                this.#showDiv()
            })
        });
    }


    #activeClosePopup() {
        var closeButton = document.querySelector("popup-lightbox .lightbox-button.close");
        closeButton.addEventListener("click", () => {
            this.#hiddenDiv();
        })
    }

    #activeNextImage() {
        var closeButton = document.querySelector("popup-lightbox .lightbox-button.next");
        closeButton.addEventListener("click", (event) => {
            event.preventDefault()
            this.#nextImage();
        })
    }

    #activePrevImage() {
        var closeButton = document.querySelector("popup-lightbox .lightbox-button.prev");
        closeButton.addEventListener("click", (event) => {
            event.preventDefault()
            this.#prevImage();
        })
    }

    // Styles change

    #hiddenDiv() {
        document.querySelector(this.initDiv).style.display = "none";
    }

    #showDiv() {
        document.querySelector(this.initDiv).style.display = "block";
    }


    // Navigation

    #nextImage() {
        let tmpNumber = 0;
        if (this.number < this.imageList.length - 1) {
            tmpNumber = this.number + 1;
        } else {
            tmpNumber = 0;
        }
        this.number = tmpNumber;
        let src = this.imageList[tmpNumber].src;
        let alt = this.imageList[tmpNumber].alt;
        this.changePhoto(src, alt);
    }

    #prevImage() {
        let tmpNumber = 0;
        if (this.number > 0) {
            tmpNumber = this.number - 1;
        } else {
            tmpNumber = this.imageList.length - 1;
        }
        this.number = tmpNumber;
        let src = this.imageList[tmpNumber].src;
        let alt = this.imageList[tmpNumber].alt;
        this.changePhoto(src, alt);
    }


    changePhoto(src, alt) {
        var number = this.number + 1;
        var popupLightbox = document.querySelector("popup-lightbox");
        popupLightbox.setAttribute('actualPage', number);
        popupLightbox.setAttribute('src', src);
        popupLightbox.setAttribute('altImage', alt);
        this.#active();
    }

}