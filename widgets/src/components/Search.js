import axios from "axios";
import React, {useState, useEffect} from "react";

export const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    
    console.log(results);

    useEffect ( () => {
        const searchFn = async () => {
            const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };
        searchFn();
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                        value={term}
                        onChange={ e => setTerm(e.target.value)}
                        />
                </div>
            </div>
        </div>
    );
}