import { useState } from "react";
import { Keys } from "./Keys";



export const Calculator = () => {
    
    const keys = [
        "AC",
        "C", 
        "%",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        ".",
        "0",
        "=",
       ];

    const [showResult, setShowResult]= useState(false);
    const [display, setDisplay] = useState("");

    const maxLimit = 15;
    const calculateResult = () => {
        if(display.length !== 0){
            try{
                let calcResult = eval(display);
                calcResult = parseFloat(calcResult.toFixed(3));
                setDisplay(calcResult);
                setShowResult(true);
            }catch(error){
                setDisplay("Error")
            }
        }else setDisplay("")
    }

    const handleButton = (value) => {
        setShowResult(false);
        if(value === "AC")setDisplay("");
        /*else if(value === "C")setDisplay(display.slice(0, -1));*/
        else if(isOperator(value)){
            if(display == "" || isOperator(display[display.length - 1]))
            return;
            setDisplay(display + value)
        }
        else if(value === "=")calculateResult();
        else if(display.length >= maxLimit)
            alert(`maximum character allowed : ${maxLimit}`)
        else setDisplay(display + value);
    }
    const isOperator = (char) => {
        return ["*","/","%"].includes(char);
    }

    const operationClass = "text-[18px] tracking-[2px] flex gap-[5px] items-center justify-end"
    const resultClass = "text-[25px]"


  return (
    <div className="bg-black min-w-[320px] rounded-2xl flex flex-col gap-4 p-4   ">
        <div className="overflow-x-auto bg-gray-700 min-h-[100px] flex items-end justify-end rounded-lg p-4 flex-col">
    
          <div className={`${ showResult ? resultClass : operationClass }`}>
            {display}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 ">
            {keys.map((keys, index) => (
                <Keys 
                label={keys} 
                key={index} 
                keyClass = {keys === "=" && "=" }
                onButtonClick = {handleButton}
                />
            ))}
        </div>
    </div>
  )
}
