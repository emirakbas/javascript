function changeContent() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    console.log("Content changed.");
    alert("Content changed."); // JavaScript üzerinde girdiğimiz tüm objeler varsayılan olarak window objesine eklenir. window.alert() ile alert() aynı işleve sahiptir.
}


/* Bazı notlar: 
1- "=" işareti JS'de atama işlemi yapar. Matematikteki gibi değildir.
2- JS'de "Eşittir" anlamına gelen "==" işareti kullanılır.
3- "===" işareti ise hem değer hem de tür (type) kontrolü yapar.
4- JS'de "!=" işareti eşit değil anlamına gelir.
5- var ifadesi genellikle eski tarayıcılar için kullanılır. Eğer var ifadesi kullanılmazsa, değişken global bir değişken olur. W3 Schools'a göre, var ifadesi yalnızca eski tarayıcılar için kullanılmalıdır.
6- const ifadesi değiştiriilemez bir değişken tanımlar.
7- let ifadesi ise block scope bir değişken tanımlar. Yani sadece tanımlandığı blok içerisinde geçerlidir. Sonradan değiştirilebilir.
8- JS'de değişken isimleri sayı ile başlamaz. Ayrıca değişken isimleri büyük-küçük harf duyarlıdır.
9- JS geliştiricileri genellikle lowerCamelCase kullanır. Örnek: "myVariableName".
10- JS'de bir değeri değişkene atamadan önce değişkeni tanımlamak iyi bir uygulamadır.
11- {} ifadeleri bir bloğu belirtir. Bloklar genellikle fonksiyonlar, koşullar, döngüler ve nesneler için kullanılır.
12- Tek bir ifadede (let gibi) birden fazla değişken tanımlanabilir. Örnek: "let x = 5, y = 6, z = 7;". Değişkenler arasında virgül kullanılır. En son değişkenin sonuna noktalı virgül konulur.
13- Noktalı virgül konulmadığı sürece bir ifadede birden fazla satır kullanılabilir. JS otomatik olarak satır sonlarını noktalı virgülle ayırır. Ancak, bazı durumlarda bu durum hatalara yol açabilir. Bu yüzden noktalı virgül kullanmak iyi bir uygulamadır. 
Örnek: let x = 5,
       y = 6,
       z = 7;

14- Değer olmadan bildirilen değişkenler "undefined" çıktısını verir.
15- let veya const ile tanımlanmış bir değişken sonra tekrar atanamaz/tanımlanamaz. Ancak "var" ile tanımlanmış bir değişken daha sonra tekrar tanımlanabilir.
16- Bir sayı metin olarak yazılırsa (let x = "25" gibi) ardından gelen diğer sayılar otomatik olarak metin kabul edilir. let x = "5" + 2 + 3; işleminde sonuç "523" olur.
17- $ ve _ işareti birer harf kabul edilir. Bu yüzden değişken isimlerinde kullanılabilirler. Örnek: let $ = 5;
18- Genelde JS geliştiricileri alt-tire (_) kullanmazlar. Genellikle gizli değişkenlerde kullanılır. Tercih meselesi.

*/
