class PopupLight extends HTMLElement {

    static observedAttributes = [
        "title",
        "src",
        "alt",
        "actualPage",
        "pagesNumbers"
    ];

    constructor() {
        super();
    }

    connectedCallback() {
        // console.log("Custom element added to page.");
        this.render();
    }

    disconnectedCallback() {
        // console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        // console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Attribute ${name} has changed.`);
        this.render();
    }

    #style() {
        var localStyle = `

            #simple-lightbox {
                width: 100vw;
                height: 100vh;
                background-color: rgba(46, 46, 46, 0.8);
                position: fixed;
                z-index: 999;
                top: 0;
                left: 0;
            }

            #simple-lightbox.hidden {
                display: none;
            }

            #simple-lightbox p {
                color: white;
                font-size: 1rem;
                font-weight: bold;
                padding: 10px;
                font-family: arial;
            }

            #simple-lightbox .top-baner {
                width: 100vw;
                height: 5vh;
                display: flex;
                justify-content: space-between;
            }

            #simple-lightbox .top-baner .description {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #simple-lightbox .top-baner .description .title p {
                font-size: 1.5rem
            }

            #simple-lightbox .top-baner .navigation {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #simple-lightbox .top-baner .navigation .lightbox-button {
                margin-left: 10px;
                margin-right: 10px;
                cursor: pointer;
            }

            #simple-lightbox .top-baner .navigation .lightbox-button:hover {
                opacity: 0.5;
                transition: 0.5s;

            }

            #simple-lightbox .image-slider {
                width: 100vw;
                height: 95vh;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }

            #simple-lightbox .image-slider img{
                max-height: 100%;
                max-width: 100%;
            }

            @media screen and (max-width: 900px) {

            }
        `;

        const style = document.createElement('style');
        style.textContent = localStyle;
        document.head.append(style);
    }

    #prevIcon() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L8 12L16 20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    #nextIcon() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4L16 12L8 20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    #closeIcon() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12L16 16M16 8L12 12L16 8ZM12 12L8 16L12 12ZM12 12L8 8L12 12Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    render() {

        const title = this.getAttribute("title") || "";
        const src = this.getAttribute("src") || "";
        const altImage = this.getAttribute("alt") || "";
        const actualPage = this.getAttribute("actualPage") || "1";
        const pagesNumbers = this.getAttribute("pagesNumbers") || "1";

        this.#style();
        this.innerHTML = `
            <div id="simple-lightbox">
                <div class="top-baner">
                
                    <div class="description">
                        <div class="title">
                            <p>${title}</p>
                        </div>
                    </div>

                    <div class="navigation">
                        <div class="lightbox-button prev">
                            ${this.#prevIcon()}
                        </div>
                        <div class="pagination">
                            <p>${actualPage}/${pagesNumbers}</p>
                        </div>
                        <div class="lightbox-button next">
                            ${this.#nextIcon()}
                        </div>
                        <div class="lightbox-button close">
                            ${this.#closeIcon()}
                        </div>
                    </div>
                </div>
                <div class="image-slider">
                    <img src="${src}" alt="${altImage}">
                </div>
            </div>
        `;
    }
}

customElements.define("popup-lightbox", PopupLight);