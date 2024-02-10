class ImageDisplay {
    constructor() {
        this.imageContainer = document.getElementById('imageContainer');
        this.generateImageBtn = document.getElementById('generateImageBtn');
        this.generateImageBtn.addEventListener('click', this.generateImage.bind(this));
        this.isOnCooldown = false;
        this.COOLDOWN_DURATION = 5000;
    }

    displayImages(count, urls, httpsUrls) {
        let apiUrl = `http://shibe.online/api/shibes?count=${count}&urls=${urls}&httpsUrls=${httpsUrls}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.imageContainer.innerHTML = '';

                data.forEach(imageUrl => {
                    let img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = 'Shibe Image';
                    this.imageContainer.appendChild(img);
                });
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    generateImage() {
        if (this.isOnCooldown) {
            alert("Espere 5 segundos para gerar outra imagem!");
            this.generateImageBtn.disabled = true;
            return;
        }

        this.displayImages(1, true, true);

        this.isOnCooldown = true;
        setTimeout(() => {
            this.isOnCooldown = false;
            this.generateImageBtn.disabled = false;
        }, this.COOLDOWN_DURATION);
    }
}

const imageDisplay = new ImageDisplay();

