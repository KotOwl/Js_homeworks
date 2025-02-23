// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    // .then(console.log)
    .then(res => {
        console.log(res)
        let wrapper = document.createElement("div")

        let {carts} = res
        for (const cart of carts) {
            let ulDiv = document.createElement('div')
            let {products} = cart
            for (const liElement of products) {
                let divLi = document.createElement('div')
                divLi.innerHTML = `<img src="${liElement.thumbnail}" alt=" ">  ${liElement.title}
    ціна ${liElement.price}
    відсоток знижки ${liElement.discountPercentage}
    кількість товару: ${liElement.quantity}
    Ціна без знижки ${liElement.total}
    Загальна ціна зі знижкою :${liElement.discountedTotal}
    id:${liElement.id}`
                ulDiv.append(divLi)
            }
            let hr1 = document.createElement('hr')
            let hr2 = document.createElement('hr')
            let divSum = document.createElement('div')
            divSum.innerHTML = `${cart.id} Кількість позицій ${cart.totalProducts} Кількість продуктів ${cart.totalQuantity} ціна без знижки ${cart.total} ціна зі знижкою ${cart.discountedTotal} userId :${cart.userId}`
            ulDiv.append(hr1,divSum,hr2)
            wrapper.append(ulDiv)
        }
        document.body.append(wrapper)
    });

// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(recipe => recipe.json())
    .then(recipe => {
        console.log(recipe.recipes[0])
        let wrapper = document.createElement('div')
        let {recipes } = recipe
        for (const recipe of recipes) {
            let {ingredients,instructions, mealType,tags} = recipe
            let infoDiv =document.createElement('div')

            infoDiv.innerHTML =`<img src="${recipe.image}"> <br>cuisine:${recipe.cuisine} <br> difficulty:${recipe.difficulty}<br> ${recipe.caloriesPerServing} calories<br>Cook time: ${recipe.cookTimeMinutes}min <br>
Preparation time ${recipe.prepTimeMinutes}min <br> Rating : ${recipe.rating} <br>reviews : ${recipe.reviewCount} <br> Servings : ${recipe.servings} <br>`
            let tagsDiv = document.createElement('div')
            for (const tag of tags) {
                let p = document.createElement('p')

                p.innerText = `#${tag}`
                tagsDiv.append(p)
                tagsDiv.style.display = 'inline-block'
                infoDiv.append(tagsDiv)
            }
            let mealTypeDiv = document.createElement('div')
            for (const meal of mealType) {
                let p = document.createElement('p')
                p.innerText=`${meal}`
                mealTypeDiv.append(p)
            }
            let img = infoDiv.querySelector('img')
            img.style.height = '200px'
            let h1 = document.createElement('h1')
            h1.innerText = `${recipe.name}`
            let divForIterIngredients = document.createElement('div')
            let UlIngredients = document.createElement("ul")
            UlIngredients.innerText ='Продукти:'
            for (const ingredient of ingredients) {

                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                UlIngredients.append(li)
                wrapper.append(divForIterIngredients)

            }
            let insDiv=document.createElement('div')
            for (const instruction of instructions) {
                let p = document.createElement('p')
                p.innerText = `${instruction}`
                insDiv.append(p)
            }
            wrapper.append(h1,mealTypeDiv,infoDiv,UlIngredients,insDiv)
            document.body.append(wrapper)
        }

    });