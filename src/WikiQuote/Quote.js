import React , {useEffect, useState} from "react";
import { ReactPropTypes } from "react";

function Quote() {
    const [data, setData] = React.useState(null)
    
    async function updateQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error();
            setData({content: 'Something went wrong...'})
        }
    }

    useEffect(() => {
        updateQuote()
    }, [])

    if (!data) return null;

    const styles = {
        ul: {
            listStyle: 'none',
        }
    }

    return (
        <div className="quote">
            <ul style={styles}>
                <p>{data.content}</p>
                <p className="author">{data.author}</p>
                <button type='button' onClick={updateQuote}>Get a random Quote</button>
            </ul>
        </div>
    )
}

export default Quote