type ListProps = {
    items: {
        id: number
        name: string
        price: number
    }[]
    catagory: string
}


function RanderingList({items, catagory}: ListProps) {

    const sortedList = items.sort((a, b) => b.price - a.price)

    const listedFoods = sortedList.map(food => <li key={food.id} className="list-items">
                            {food.name}: {food.price} yen
                        </li>)   

    return (
        <div className="list-container">
            <h2 className="catagory">{catagory}</h2>
            <ul>
                {listedFoods}
                {/* items.length > 0 && listedFoods */}   {/* ture && 1 -> return 1 */} {/* ture && "string" -> return "string" */}
            </ul>                                       
        </div>
    )
}

export default RanderingList;
