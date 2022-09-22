import {useState} from "react"
import "./App.css";
import Card from "./componetes/Card.js"


const RandoCard = (array) => array.map((element, index) => {
    let number = Math.round( Math.random() * (array.length - 1) );
    return [ array[index],array[number] ] = [ array[number],element ]
})

const GenerateCard = (number=1) => { 

    const array=[];

    for (let i=0; i<number; i++) {

        array.push(

            {state:false,partner:i},
            {state:false,partner:i}

        )
    }   

    RandoCard(array)

    return array
}


const App = () => {

    const [stateCards,SetStateCards] = useState([null,GenerateCard(4)]);
    const [oldCard,Cards] = stateCards;

    const changeState = (key) => {
        let oldState=Cards
        if(oldState[key].state) return 
     
        oldState[key].state=true

        SetStateCards([oldCard==null ? key : null, oldState.map((element)=> element)]);

        isWin()

        setTimeout(() => {
            if(oldCard==null) return

            if(oldState[oldCard].partner===oldState[key].partner) return
                    
            SetStateCards( [ null, oldState.map((element) => {

                element.state=false 
                return element

            } ) ] );

        }, 500);

    }

    const isWin =(() =>{
       for (let i=0; i< Cards.length; i++) if(!Cards[i].state) return false

       setTimeout(() => {
        alert("Felicidades Ganaste!!!")
        SetStateCards([null,GenerateCard(4)]);
       }, 700);
    })

    const handleClick =(event) => {
       changeState(event.target.getAttribute('data-key'))
    }

    return (
        <div className="App">
            <section className="App-contenct">
                { Cards.map((element,index) => {
                    return <Card key={index}  data-key={index} args={element} onClick={handleClick} />
                }) }
               
            </section>
        </div> 
    )

}




export default App;