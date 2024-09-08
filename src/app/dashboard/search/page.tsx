"use client"
import React, { useState, useEffect } from 'react';

interface City {
    id: number;
    name: string;
}

interface State {
    id: number;
    name: string;
    city: City[];
}

interface Country {
    id: number;
    name: string;
    state: State[];
}

interface Book {
    id: number;
    name: string;
    publishedAt: string;
}

interface Author {
    id: number;
    name: string;
    books: {
        book: Book;
    }[];
}

const SearchComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [countries, setCountries] = useState<Country[]>([]);
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [results, setResults] = useState<Author[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('http://localhost:3000/country?type=data');
            const data: Country[] = await response.json();
            setCountries(data);
        };
        fetchCountries();
    }, []);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        const selectedStates = countries.find((c) => c.id === Number(selectedCountry))?.state || [];
        setStates(selectedStates);
        setCities([]);
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedState = e.target.value;
        setState(selectedState);
        const selectedCities = states.find((s) => s.id === Number(selectedState))?.city || [];
        setCities(selectedCities);
    };

    const handleSearch = async () => {
        const query = new URLSearchParams({
            name,
            startDate,
            endDate,
            country,
            state,
            city,
        }).toString();
        const response = await fetch(`http://localhost:3000/search?${query}`);
        const data: Author[] = await response.json();
        setResults(data);
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search for Authors and Books</h1>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Author or Book Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div className="flex space-x-4">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <select
                        value={country}
                        onChange={handleCountryChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={state}
                        onChange={handleStateChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select State</option>
                        {states.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select City</option>
                        {cities.map((ci) => (
                            <option key={ci.id} value={ci.id}>
                                {ci.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={handleSearch}
                className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
                Search
            </button>

            {/* Search Results */}
            <div className="mt-8 space-y-4">
                {results.length ? (
                    results.map((author) => (
                        <div key={author.id} className="border p-4 rounded-md shadow-sm">
                            <h2 className="font-bold text-lg">Author: {author.name}</h2>
                            <ul className="ml-4 list-disc">
                                {author.books.map((book) => (
                                    <li key={book.book.id}>
                                        {book.book.name} (Published: {new Date(book.book.publishedAt).toLocaleDateString()})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No books found for the given search criteria.</p>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
