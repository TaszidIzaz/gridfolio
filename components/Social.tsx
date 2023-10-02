import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    bgColor?: String | undefined;
}

const Social: React.FC<Props> = ({ children , bgColor = "black" }) => {

    let bgHoverColorClass;

    switch (bgColor) {
        case "dribble":
            bgHoverColorClass = "hover:bg-dribble"
            break;

        case "instagram":
            bgHoverColorClass = "hover:bg-instagram"
            break;   
            
        case "twitter":
            bgHoverColorClass = "hover:bg-twitter"
            break;
            
        case "linkedin":
            bgHoverColorClass = "hover:bg-linkedin"
            break;

        default:
            bgHoverColorClass = "hover:bg-black"
            break;

    }


    
    return (
        <button className= {' group h-12 w-12 ${bgHoverColorClass} bg-white rounded-full transition-colors duration-200 ease-in-out justify-center items-center'}>
            <div className=" group-hover:fill-white fill-black transition-colors duration-200 ease-in-out items-center" >
                {children }
                    
            </div>

        </button>
    )
}

export default Social;
