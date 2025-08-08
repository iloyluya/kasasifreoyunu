// Şifre
const dogruSifre = "1234567890";
let girilen = "";
let hak = 3;

const girisDiv = document.getElementById("giris");
const rakamlarDiv = document.getElementById("rakamlar");
const mesaj = document.getElementById("mesaj");


function karistirRakamlar() {
    rakamlarDiv.innerHTML = "";
    let sayilar = ["0","1","2","3","4","5","6","7","8","9"];
    sayilar.sort(() => Math.random() - 0.5);

    sayilar.forEach(sayi => {
        let btn = document.createElement("button");
        btn.textContent = sayi;

        btn.addEventListener("click", () => {
            girilen += sayi;
            girisDiv.textContent = girilen;
            karistirRakamlar();

            if (girilen.length === dogruSifre.length) {
                if (girilen === dogruSifre) {
                    mesaj.textContent = " Şifre doğru, kasa açıldı!";
                    mesaj.style.color = "green";
                    rakamlarDiv.innerHTML = "";
                } else {
                    hak--;
                    if (hak > 0) {
                        mesaj.textContent = ` Yanlış şifre! Kalan deneme hakkı: ${hak}`;
                        mesaj.style.color = "red";
                        girilen = "";
                        girisDiv.textContent = "";
                    } else {
                       mesaj.textContent = " 3 kez yanlış girdiniz.";
mesaj.style.color = "red";
rakamlarDiv.innerHTML = "";
alert("Erişim Engellendi!");

                    }
                }
            }
        });

        rakamlarDiv.appendChild(btn);
    });
}

karistirRakamlar();
