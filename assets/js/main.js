// creo un array con la lista della spesa

const discountList = [
      'comprare un fusto di birra',
      'comprare i bicchieri per la birra',
      'comprare i sottobicchieri per i bicchieri per la birra',
      'comprare un tavolo dove mettere il fusto di birra'
];

// creo un ciclo per visualizzare singolarmente ogni punto della lista della spesa con while
let i = 0
while (i < discountList.length) {
      let product = discountList[i]
      console.log(product)

      const ulElement = document.querySelector('.card > ul')
      ulElement.innerHTML += `<li class="list-group-item">${(product)}</li>`
      
      i++
}
