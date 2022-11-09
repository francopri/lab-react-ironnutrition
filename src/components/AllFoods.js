import { useState } from "react";
// import foods from "./foods.json"


function AllFoods() {

    //criando um usestate, abre um array com dois elementos, uma variável e uma função que altera o valor da variável e como parâmetro é o valor inicial para a variável.
    // [variavel, funcao] = useState(valorInicial);  é igual a let allFoods = foods;
    //para mudar o valor da variavel é preciso usar a função setAllFoods

    const [allFoods, setAllFoods] = useState(1);
    
    console.log(allFoods);
    
    return (
        <div>
            {
                allFoods.map((food) => {

                    return (
                        //o React exige essa key para identificacao única na renderização e a key deve ser passada somente na primeira tag depois do MAP

                        <div key={food.name}>
                            <p>{food.name}</p>
                            <img src="{food.image}" alt="foto comida" width={0} />
                        </div>
                    );
                })
            }
        </div>

    )
}

export default AllFoods;