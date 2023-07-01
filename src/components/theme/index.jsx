import React, { useEffect } from "react";
import { useState} from "react";
import {ImCog} from "react-icons/im";
import "./styles.scss";
import setTheme from "../../helpers/theme";

const colorsArray = [{
    id: 'pink',
    bgColor: "#E15986"
},
{
    id: 'green',
    bgColor: "#00a36c"
},
{
    id: 'blue',
    bgColor: "#5980E1"
},
{
    id: 'orange',
    bgColor: "#E25822"
}
]
const Theme = () => {
    const [theme, setCurrentTheme] = useState('pink');
    const [toggle, setToggle] = useState(false);

    const handleToggleTheme = (currentId) => {
        setCurrentTheme(currentId)
        setToggle(false)
    };

    useEffect(()=> {
        setTheme(theme)
    },[theme])

    return (
        <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
            <div className="theme-wrapper__toggle-icon"> 
                <ImCog onClick = {()=>setToggle(!toggle)} size={40}/>
            </div>
            <div className="theme-wrapper__menu"> 
                <h4>choose theme!</h4>
                <ul>
                {
                    colorsArray.map((item,key)=>(
                        <li onClick={()=>handleToggleTheme(item.id)} key={key} style={{background: item.bgColor}}/>
                    ))
                }
                </ul>

            </div>
        </div>
    )
}

export default Theme;