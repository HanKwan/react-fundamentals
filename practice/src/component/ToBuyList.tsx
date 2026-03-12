import React, { useState } from "react"

type Product = {
            id: number
            name: string
        }

function ToDoList() {
    
    const [products, setProducts] = useState<Product[]>([])
    const [productName, setProductName] = useState("")
    const [newProductName, setNewProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [productQuantity, setProductQuantity] = useState(1)

    const handleAddProduct = () => {

        const newProduct: Product = {id: Date.now(), name: newProductName}
        setProducts(p => [...p, newProduct])
    }
    const handleInputProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProductName(e.target.value)   // this make display change when enter in input
    }
    const handleProductPrice = () => {

    }
    const handleProductQuantity = () => {

    }

    return(
        <div className="to-buy-list-container">
            <h2>Shopping List</h2>
            <input  type="text"
                    value={newProductName}
                    onChange={handleInputProduct}
                    placeholder="Enter the item name..."
            />
            <button onClick={handleAddProduct}>Add</button>

            <div className="shopping-list">
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList