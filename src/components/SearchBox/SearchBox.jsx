import css from "./SearchBox.module.css"
import { useId } from 'react';



const SearchBox=({inputValue, onChange})=>{
    
const searchId = useId();

    return(
        
    
    <>
        <label htmlFor={'${searchId}'}>Find contacts by name</label>
        <input value={inputValue} onChange={onChange}  type="text" id={'${searchId}'} />
    </>
    )

}



export default SearchBox