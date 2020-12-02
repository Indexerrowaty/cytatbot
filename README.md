![CytatBot Logo](https://i.imgur.com/DHBJAGr.png)
# CytatBot
Template bota na Discorda wysyłającego cytaty kiedy się go owzmiankuje.

## Konfiguracja bota.
Przede wszystkim wpisz `npm i` aby zainstalować wszystkie potrzebne do odpalenia bota paczki. Potem przejdź do folderu `dane` i utwórz plik `token.js`.<br>
Treść pliku `token.js` powinna wyglądać podobnie do pliku `token-example.js`. Czyli tak:
```js
export default "tutaj wklej token bota";
```

Możesz już odpalić swojego bota, ale zamiast cytatów jakie chcesz aby bot Ci wysłał pokaże się jedno z tych słów:
```
tutaj
wrzuć
swoje
cytaty
;)
```

Więc aby dodać swoje cytaty utwórz plik `quotes.js` w folderze `dane`.<br>
Treść pliku `quotes.js` powinna wyglądać podobnie do pliku `quotes-example.js`. Czyli tak:
```js
export default [
  "cytat 1",
  "cytat 2",
  "cytat 3",
  "cytat 4",
  "cytat 5",
  "cytat 6"
];
```
**Uwaga!** Zwróć uwagę na to, że na końcu ostatniego cytatu nie wstawiamy przecinka. W przeciwnym razie bot wypluje nam do konsoli błąd o nieprawidłowej składni.

Gotowe! Aby odpalić bota wpisz `npm start`. Możesz również użyć `node .` albo `node bot.js`. Zależy od gustu.
