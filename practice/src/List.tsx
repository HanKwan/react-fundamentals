function RanderingList() {

    const fastFoods: string[] = ["hamburger", "pizza", "cup noodle", "fried chicken", "fried, rice"]

    return (
        <ul>
            {fastFoods.map(food => (
                <li key={food}>{food}</li>
            ))}
        </ul>
    )
}

export default RanderingList;
