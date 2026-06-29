// Objects

// Person, Product, Comment 

const product = {
    title: "Samsung s25",
    description: "Güzel bir telefon",
    price: 70000,
    stock: 100,

    // methods
    display: function(){
        return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
    },
    is_active: function(){
        return (this.stock > 0) ? "satışta": "stok yok";
    }
};

const product2 = {
    title: "Samsung s25",
    description: "Güzel bir telefon",
    price: 70000,
    stock: 100,

    // methods
    display: function(){
        return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
    },
    is_active: function(){
        return (this.stock > 0) ? "satışta": "stok yok";
    }
};

// Kalıp => kopya1, kopya2

// Rectangle => başlık, genişlik, yüksekli, alan, çevre
// Person => ad, soyad, doğumYıl, yaş

console.log(product.title);
console.log(product.description);
console.log(product.price);

console.log(product.display());

console.log(product.is_active());