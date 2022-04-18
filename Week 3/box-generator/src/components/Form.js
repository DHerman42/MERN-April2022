import React, {useState} from 'react';

const Form = (props) => {
    const {boxArray, setBoxArray} = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState(50);

    const submitHandler = (event) => {
        event.preventDefault();

        setBoxArray([...boxArray, {
            color: color, 
            size: size + "px"
            }
        ]);

        setColor("");
        setSize(50);
    }

    return(
        <div>
            <form onSubmit={submitHandler} style={{margin: "20px"}}>
                <div>
                    <label>Color: </label>
                    <input 
                        type="text" 
                        name="color" 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Width and Height: </label>
                    <input 
                        type="text" 
                        name="size" 
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;