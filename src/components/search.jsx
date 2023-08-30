import { useState, useEffect } from "react";

const ArticlesSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Выполнять поиск каждый раз, когда значение query изменяется
        performSearch();
    }, [query]);

    const performSearch = () => {
        // Используйте query для выполнения поиска по классу article__title на странице
        const articles = document.getElementsByClassName('article__title');

        // Преобразовать HTMLCollection в массив и выполнить фильтрацию по query
        const filteredResults = Array.from(articles).filter(
            (article) => article.innerText.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filteredResults);
    };

    return (
        <div className="flexdd">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='lupa'>
                <path d="M2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z" stroke="#1B1B1B" stroke-width="1.5"/>
                <path d="M18.75 20C18.75 19.3096 19.3096 18.75 20 18.75C20.6904 18.75 21.25 19.3096 21.25 20C21.25 20.6904 20.6904 21.25 20 21.25C19.3096 21.25 18.75 20.6904 18.75 20Z" stroke="#1B1B1B" stroke-width="1.5"/>
            </svg>
            <div className='fleeex'>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Поиск статей"
                    className='search'
                />
                {query !== '' && (
                    <ul className='result'>
                        {results.map((article, index) => (
                            <li key={index}>{article.innerText}</li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default ArticlesSearch;