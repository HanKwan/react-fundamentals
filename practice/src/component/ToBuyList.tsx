import { useState } from "react"

type Product = {
            id: number
            name: string
            price: number
            quantity: number
        }

function ToDoList() {
    
    const [products, setProducts] = useState<Product[]>([])
    const [newProductName, setNewProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productQuantity, setProductQuantity] = useState(1)

    const handleAddProduct = () => {

        if (!newProductName || Number(productPrice) <= 0) return

        const newProduct: Product = {
            id: Date.now(), 
            name: newProductName,
            price: Number(productPrice),
            quantity: productQuantity
        }
        setProducts(p => [...p, newProduct])

        setNewProductName("")
        setProductPrice("")
        setProductQuantity(1)
    }

    // const handleInputProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNewProductName(e.target.value)   // this make display change when enter in input
    // }
    // const handleProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setProductPrice(Number(e.target.value))
    // }
    // const handleProductQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setProductQuantity(Number(e.target.value))
    // }

    return(
        <div className="to-buy-list-container">
            <h2>Shopping List</h2>
            <input  type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    placeholder="Enter the item name..."
            /> <br />
            <input  type="number" 
                    min="0"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Enter the item's price..."
            /> <br />
            <input  type="number"
                    min="1" 
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(Number(e.target.value))}
            />
            <button onClick={handleAddProduct}>Add</button>

            <div className="shopping-list">
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name} x {product.quantity}: {product.price * product.quantity}yen</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList