type ListProps = {
    items: {
        id: number
        name: string
        price: number
    }[]
    catagory: string
}


function RanderingList({items, catagory}: ListProps) {

    items.sort((a, b) => b.price - a.price)

    const listedFoods = items.map(food => <li key={food.id}>
                            {food.name}: {food.price} yen
                        </li>)   

    return (
        <ul>
            <h2>{catagory}</h2>
            {items.length > 0 && listedFoods}   {/* ture && 1 -> return 1 */} {/* ture && "string" -> return "string" */}
        </ul>                                       
    )
}

export default RanderingList;
