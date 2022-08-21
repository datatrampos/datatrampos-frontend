
import { COLORS } from "./styles/colors";

export const handleSinceData = (date) =>{
    let today = new Date();
    let jobDate =  new Date(date);

    const diff = Math.floor((today - jobDate)/(1000*60*60*24));
    if( diff > 1){
        return `há ${diff} dias`
    }
    else if(diff === 1){
        return `ontem`
    }
    else{
        return <strong style={{color:COLORS.darkPink}}>hoje</strong>
    }
}