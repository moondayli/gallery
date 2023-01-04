import React, { useState } from "react"
import './gallery.css'
import { AiOutlineClose } from "react-icons/ai";

const Img1 = 'https://i.imgur.com/Gu5Cznz.jpg';
const Img2 = 'https://i.imgur.com/Gu5Cznz.jpg';
const Img3 = 'https://i.imgur.com/Gu5Cznz.jpg';
const Img4 = 'https://i.imgur.com/Gu5Cznz.jpg';
const Img5 = 'https://i.imgur.com/Gu5Cznz.jpg';
const Img6 = 'https://i.imgur.com/Gu5Cznz.jpg';

export default function Gallery() {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <AiOutlineClose onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
        {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )            
            })}
            
        </div>  

        </>
    )
}