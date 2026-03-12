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

    const handleRemoveProduct = (id: number) => {
        setProducts(p => p.filter(product => product.id !== id))
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

            <div className="input-section">
                <input
                    type="text"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    placeholder="Enter the item name..."
                />

                <input
                    type="number"
                    min="0"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Price"
                />

                <input
                    type="number"
                    min="1"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(Number(e.target.value))}
                />

                <button onClick={handleAddProduct}>Add</button>
            </div>

            <ul className="shopping-list">
                {products.map(product => (
                    <li key={product.id}>
                        <input type="checkbox" onClick={() => handleRemoveProduct(product.id)}/>
                        <span className="product-name">{product.name}</span>
                        <span>x{product.quantity}</span>
                        <span className="price">
                        {product.price * product.quantity} yen
                        </span>
                    </li>
                ))}
            </ul>
            <div className="totalAmount">Total: {products.reduce((sum, product) => sum + product.price * product.quantity, 0)}</div>
        </div>
    )
}

export default ToDoList