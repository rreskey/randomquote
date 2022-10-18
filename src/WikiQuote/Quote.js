import React , {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button'

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

    const styles = {
        ul: {
            listStyle: 'none', 
            padding: '3rem'
        },

        quoteData: {
            fontSize: '2.2rem',
            textAlign: 'left',
        },

        newQuote: {
            fontSize: '2.2rem',
            textAlign: 'center',
            marginBottom: '10px',
            width: '90%',
            display: 'block',
            margin: '0 auto'
        },

        link: {
            textDecoration: 'none',
            color: 'gray'
        },
    }

    if (!data) return null;

    let url = 'https://en.wikipedia.org/wiki/';
    
    return (
        <div className="quote" id="quote-box">
            <ul style={styles.ul}>
                <li>
                    <p id="text" style={styles.quoteData}>{data.content}</p>
                    <a id="tweet-quote" href="twitter.com/intent/tweet">tweet</a>
                    <p id="author" className="author"><a href={url+data.author} target="_blank" style={styles.link}>{data.author}</a></p>
                </li>
            </ul>
            <Button id='new-quote' type='button' variant='success' size='lg' style={styles.newQuote} onClick={updateQuote}>Get a random Quote</Button>
        </div>
    )
}

export default Quote