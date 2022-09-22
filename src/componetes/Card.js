import React from "react"


export default function Card({...props}){
    
    return <div {...props} className = { props.args.state ? "card cardFront" : "card" } >{ props.args.state ? props.args.partner : "" }</div>
}
