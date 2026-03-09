type ListProps = {
    items: {
        id: number
        name: string
        price: number
    }[]
    catagory: string
}


function RanderingList({items, catagory}: ListProps) {

    // instead of items.sort((a,b) => ...) which mutating props which should be read only
    // instead make a copy with spead operator which creates new array
    // dont use sort(), push(), pop(), splice(), reverse() if it came from props
    // use [...array], array.slice(), array.map(), array.filter() instead
    
    const sortedList = [...items].sort((a, b) => b.price - a.price)

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
