import { useState } from "react"

const Form = (props)=> {
    const formHandler = (event)=> {
        props.formChange(event.target.value)
    }
    const[userData, setUserData] = useState ({
        criteria: '',
        input: ''
    })
    
    return (

            <form onSubmit={formHandler}>
                <select className="form-control mb-3" name="criteria" onChange={formHandler}>
                    <option selected enabled>Pasirinkite poemą</option>
                    <option value="author">autorius</option>
                    <option value="title">pavadinimas</option>
                </select>
                <input type="text" className="form-control" name="input"></input>
            </form>

    )
}

export default Form