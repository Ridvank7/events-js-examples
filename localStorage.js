//! Local Storage
//* JavaScript'te Local Storage Kullanımı

//* Giriş

// Web uygulamalarında veri saklamanın yaygın yollarından biri, tarayıcının yerel depolama alanını (local storage) kullanmaktır. Local storage, key-value (anahtar-değer) çiftleri şeklinde veri saklamanıza olanak tanır ve saklanan veriler tarayıcı oturumları arasında kalıcıdır, yani kullanıcı tarayıcıyı kapatsa bile veriler kaybolmaz. JavaScript ile local storage'ı kullanmak, veri saklama, okuma ve silme işlemlerini kolay bir şekilde gerçekleştirmenize olanak tanır.

//? Local Storage'a Veri Saklama

// Local storage'a veri eklemek için `setItem` metodunu kullanırız. Bu metod, iki parametre alır: bir anahtar ve bu anahtara atanacak değer. Örneğin, bir kullanıcının adını saklamak istiyorsanız:

// localStorage.setItem('kullaniciAdi', 'Ali');

// Bu kod, "kullaniciAdi" anahtarını kullanarak "Ali" değerini local storage'a kaydeder.

//? Local Storage'dan Veri Okuma

// Saklanan veriyi okumak için `getItem` metodunu kullanırız. Bu metod, okumak istediğiniz verinin anahtarını parametre olarak alır. Yine yukarıdaki örneği ele alalım:

// let kullaniciAdi = localStorage.getItem('kullaniciAdi');
// console.log(kullaniciAdi); // Çıktı: Ali

// Eğer istenen anahtar local storage'da yoksa, `getItem` `null` değeri döndürür.

//? Local Storage'dan Veri Silme

// Local storage'dan bir öğeyi silmek için `removeItem` metodunu kullanırız. Bu metod, silmek istediğiniz öğenin anahtarını parametre olarak alır:

// localStorage.removeItem('kullaniciAdi');

// Bu kod, "kullaniciAdi" anahtarını ve ona bağlı değeri local storage'dan siler.

//? Tüm Verileri Temizleme

// Eğer local storage'daki tüm verileri temizlemek istiyorsanız, `clear` metodunu kullanabilirsiniz:

// localStorage.clear();

// Bu metod, local storage'daki tüm anahtar-değer çiftlerini siler.

//? Dikkat Edilmesi Gerekenler

// - Local storage, sadece string türünde veri saklar. Eğer nesne veya dizi gibi yapıları saklamak istiyorsanız, önce `JSON.stringify` metodu ile bu yapıları string'e çevirmeniz gerekir. Veriyi tekrar okurken de `JSON.parse` metodu ile string'i orijinal yapısına dönüştürebilirsiniz.
// - Local storage tarayıcıya özgüdür ve farklı tarayıcılarda veya farklı cihazlarda paylaşılmaz.
// - Güvenlik ve gizlilik açısından hassas verilerin local storage'da saklanmaması önerilir.

//? Sonuç

// Local storage, web uygulamalarında veri saklamak için kullanışlı ve kolay bir yöntem sunar. JavaScript ile local storage'ın temel metodlarını kullanarak veri saklama, okuma ve silme işlemlerini kolaylıkla gerçekleştirebilirsiniz. Ancak, kullanımı sırasında veri güvenliği ve gizliliğine dikkat etmek önemlidir.

//? Veri saklama

// localStorage.setItem("key","value")
// localStorage.setItem("name","Talha")
// localStorage.setItem("name1","Ali")
// localStorage.setItem("name2","Ahmet")
// localStorage.setItem("surname","Akça")
// localStorage.setItem("surname1","Yalı")

// //? Veri Okuma

// let kullanıcı = localStorage.getItem("surname")
// console.log(kullanıcı)

// //? Veri Silme

// localStorage.removeItem("key")
// localStorage.removeItem("name")

// //? Verilerin tamamını silme

// localStorage.clear()

//? Kullanıcı adını input ile girsin. Gönder butonuna tıkladığında veri local storage de saklansın. Kullanıcı çağır butonuna tıklayınca girilen isin console da yazdırılsın.



//? Bir alışverş sepetindeki ögeleri local storage de saklayın. daha sonra bu veriyi okuyun.

// let sepet = ["elma","çilek","muz","kayısı"]
// localStorage.setItem("sepet",JSON.stringify(sepet))
// console.log(localStorage.getItem("sepet"))
// let localSepet = localStorage.getItem("sepet")
// console.log(JSON.parse(localSepet))
