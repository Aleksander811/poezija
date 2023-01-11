import {useState, useEffect} from "react";
import Poem from "../poem/Poem";
import Form from "../form/Form";


const Main = ()=> {
    const [poems, setPoems] = useState();
    const [form, setForm] = useState()
    useEffect( ()=>{
        try{
            fetch(`https://poetrydb.org/${form.criteria}/${form.input}/lines.json`)
                .then(response=>response.json())
                .then(data=>setPoems(data))
        }catch (msg){
            console.log(msg)
        }
    }, [form])

    const formChangeHandler = (data)=> {
        setForm(data)
    }
    console.log(form)
    
    return(
        <>
            <Form formChange={formChangeHandler} />
            <div className="row">
                
            </div>
        </>
    )
}

export default Main