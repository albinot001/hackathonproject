// src/QueryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const QueryForm = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);

    const handleQuery = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/query', { query });
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Book trusted help for home tasks</h1>
            <div className="search-bar">
                <input
                    name="query"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="What do you need help with?"
                />
                <button onClick={handleQuery}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
            {result && <pre className="result">{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
};

export default QueryForm;
