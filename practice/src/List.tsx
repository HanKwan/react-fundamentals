function RanderingList() {

    const fastFoods= [  {id: 1, name: "hamburger", price: 500}, 
                        {id: 2, name: "pizza", price: 800}, 
                        {id: 3, name: "cup noodle", price: 200}, 
                        {id: 4, name: "fried chicken", price: 600}]   

    // fastFoods.sort((a, b) => a.name.localeCompare(b.name)) // alphabetically
    // fastFoods.sort((a, b) => b.price - a.price) // high to low price
    // const expensivefastFoods = fastFoods.filter(fastFood => fastFood.price >= 500)
    // expensivefastFoods.sort((a, b) => b.price - a.price)

    const listedFoods = fastFoods.map(food => <li key={food.id}>
                            {food.name}: ${food.price}
                        </li>)   

    return (
        <ul>
            <h2>Fast Foods</h2>
            {fastFoods.length > 0 && listedFoods}   {/* ture && 1 -> return 1 */} {/* ture && "string" -> return "string" */}
        </ul>                                       
    )
}

export default RanderingList;
