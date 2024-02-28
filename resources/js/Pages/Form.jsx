import React, { useState, useEffect, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import single from './Single';

const Form = ({ auth }) => {
    const [corprofiles, setCorprofiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedProfession, setSelectedProfession] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchKeyword, setSearchKeyword] = useState('');
    const bottomBoundaryRef = useRef(null);

    useEffect(() => {
        fetchData();
        // Add event listener to window for scroll event
        window.addEventListener('scroll', handleScroll);
        // Remove event listener when component is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPage, selectedProfession, selectedLocation, sortOrder, searchKeyword]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loading && currentPage < totalPages) {
                    loadMore();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1 // When 10% of the element is visible, trigger loading more
            }
        );
        if (bottomBoundaryRef.current) {
            observer.observe(bottomBoundaryRef.current);
        }
        return () => {
            if (bottomBoundaryRef.current) {
                observer.unobserve(bottomBoundaryRef.current);
            }
        };
    }, [loading, currentPage, totalPages, selectedProfession, selectedLocation, sortOrder, searchKeyword]);

    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight;
        if (bottom && !loading && currentPage < totalPages) {
            loadMore();
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/corprofiles?page=${currentPage}`);
            const jsonData = await response.json();
            let filteredData = jsonData.data;
            if (selectedProfession) {
                filteredData = filteredData.filter(profile => profile.profession === selectedProfession);
            }
            if (selectedLocation) {
                filteredData = filteredData.filter(profile => profile.location === selectedLocation);
            }
            if (searchKeyword) {
                const keyword = searchKeyword.toLowerCase();
                filteredData = filteredData.filter(profile => profile.name.toLowerCase().includes(keyword));
            }
            if (sortOrder === 'asc') {
                filteredData.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                filteredData.sort((a, b) => b.name.localeCompare(a.name));
            }
            setCorprofiles([]);
            setCorprofiles(filteredData);
            setTotalPages(jsonData.last_page);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMore = () => {
        if (!loading) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handleProfessionChange = (e) => {
        setSelectedProfession(e.target.value);
        setCorprofiles([]);
        setCurrentPage(1);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
        setCorprofiles([]);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setCorprofiles([]);
        setCurrentPage(1);
    };

    const handleSearchKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchSubmit = () => {
        setCorprofiles([]);
        setCurrentPage(1);
    };

    return (
        <>


                <Head title="Form" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-4 mb-4">
                        <div className="w-full sm:w-1/2 md:w-auto">
                                <input type="text" name="keyword" placeholder="Search keyword..." value={searchKeyword} onChange={handleSearchKeywordChange} className="form-input" />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-auto">
                            
                                <select name="profession" onChange={handleProfessionChange} className="form-select">
                                    <option value="">Choose profession...</option>
                                 
                                    <option value="Engineer">Engineer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Doctor">Doctor</option>
          
                                    
          
                                    <option value="Lawyer">Lawyer</option>
                                    <option value="Teacher">Teacher</option>
                                </select>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-auto">
                                <select name="location" onChange={handleLocationChange} className="form-select">
                                    <option value="">Choose location...</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Gurgaon">Gurgaon</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Bengalore">Bengalore</option>
                                </select>
                            </div>
                            
                        </div>
                            
                        <ul style={{ paddingLeft: '0px', display: 'flex', justifyContent: 'space-between' }}>

                            <li>
                            <h3 className="text-lg font-semibold mb-4">Corporate Profiles</h3>
                            </li>
                            <li>
                            <div className="w-full sm:w-1/2 md:w-auto">
                                <select name="sortOrder" onChange={handleSortChange} className="form-select">
                                    <option value="asc">A-Z</option>
                                    <option value="desc">Z-A</option>
                                </select>
                            </div>
                            </li>
                            </ul>  
                            {corprofiles.map(corprofile => (
    <div key={corprofile.id} className="bg-white shadow-md p-6 mb-6 flex items-center">
        <div className="mr-6">
            <img src={`http://127.0.0.1:8000/storage/${corprofile.image}`} alt="Profile Image" className="w-32 h-32 object-cover rounded-lg" />
        </div>
        <div className="flex-grow">
            <div>
                <h4 className="text-lg font-semibold">{corprofile.name}</h4>
                <h5 className="text-lg font-semibold">{corprofile.profession}</h5>
                <p className="text-gray-600">{corprofile.location}</p>
                <p><a href="tel:+123456789" className="text-green-600">Phone</a></p>
                <a href={`mailto:${corprofile.email}`} className="text-green-600">Email</a>
                <h4 className="text-lg font-semibold">{corprofile.created_at}</h4>
                <h4 className="text-lg font-semibold">{corprofile.updated_at}</h4>
            </div>
            <div className="flex justify-center mt-2">
                <a href="https://google.com" className="text-gray-600 hover:text-gray-900 mr-4">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" className="h-8 w-8" />
                </a>
                <a href="https://google.com" className="text-gray-600 hover:text-gray-900">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 2C17.3 2 20 4.7 20 8V14C20 17.3 17.3 20 14 20H10V14H12V11.6H10V9.4C10 8.1 10.9 7.1 12.2 7.1H14V9.5H12.5C11.8 9.5 11.5 9.9 11.5 10.5V11.6H14.1L13.7 14H11.5V20H7C3.7 20 1 17.3 1 14V8C1 4.7 3.7 2 7 2H14Z" />
                    </svg>
                </a>
            </div>
            
            <div><a href="single">View Details</a></div>
        </div>
    </div>
))}


                        <div ref={bottomBoundaryRef} />
                        {loading && <p>Loading...</p>}
                    </div>
                </div>
            
        </>
    );
};

export default Form;
