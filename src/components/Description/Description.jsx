import css from "./Description.module.css"

const Description = ()=>{
    return ( 
<div className = {css.description}>
<h2 className = {css.title} >Sip Happens Cafe</h2>
<p className = {css.proposal}>Please leave your feedback about our service below</p>
</div>
)
}
export default Description