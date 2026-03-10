import React, { useState } from "react"

function Onchange() {
    
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [instruction, setInstruction] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value))
    }
    const handleInstructionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInstruction(e.target.value)
    }
    const handlePayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPayment(e.target.value)
    }
    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShipping(e.target.value)
    }

    return(
        <div className="onchange-container">
            <div className="fill-in-form">
                <h3>Fill in the form</h3>
                <div>
                    <label htmlFor="name">Enter name: </label>
                    <input  value={name} 
                            onChange={handleNameChange} 
                            type="text" />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity: </label>
                    <input  
                        value={quantity} 
                        onChange={handleQuantityChange} 
                        type="number" 
                    />
                </div>
                <div>
                    <label htmlFor="instruction">Instruction: </label>
                    <textarea   
                        value={instruction} 
                        onChange={handleInstructionChange} 
                        placeholder="Enter comment"
                    />
                </div>
                <select value={payment} onChange={handlePayment}>
                    <option value="">Select payment method</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Konbini Pay">Konbini Pay</option>
                    <option value="PayPay">PayPay</option>
                </select>
                <div className="radio-group">
                    <label><input   
                                type="radio"
                                name="shipping"
                                checked={shipping === "Pick up"} 
                                onChange={handleShippingChange} 
                                value="Pick up"
                            />
                            Pick up</label>
                    <br />
                    <label><input 
                                type="radio" 
                                name="shipping"
                                checked={shipping === "Delievery"} 
                                onChange={handleShippingChange} 
                                value="Delievery"
                            />
                            Delievery</label>
                </div>
            </div>
            <div className="comformation-form">
                <h3>Conformation</h3>
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Instruction: {instruction}</p>
                <p>Payment method: {payment}</p>
                <p>Shipping: {shipping}</p>
            </div>
        </div>
    )
}

export default Onchange