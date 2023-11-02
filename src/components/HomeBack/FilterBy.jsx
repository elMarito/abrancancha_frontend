import React, { useEffect, useContext, useState } from 'react'
import { appContext } from '../../context/appContext';

const FilterBy = () => {
    const { cache, setCache } = useContext(appContext);
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        // e.preventDefault();
        // console.log(e.target.value);
        // const selectedCategories =cache.filters;
        let newSelectedCategories
        if (cache.filters.includes(e.target.value)) {
            newSelectedCategories = cache.filters.filter(cat => cat != e.target.value)
            // console.log(e.target.value, cache.filters, { selectedCategories: newSelectedCategories });
        }
        else
            newSelectedCategories = [...cache.filters, e.target.value];

        setCache((prevState) => ({ ...prevState, filters: newSelectedCategories }));
    }
    const isChecked = (option) => (cache.filters.includes(option));

    // const isChecked = (option) => cache.order === option;
    //obtener las categorias con fetch
    //const BASE_URL = 'https://fakestoreapi.com/products';
    //dbAdapter: new DbAdapter(BASE_URL),
    useEffect(() => {
        //  fetch(BASE_URL)
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => {
                if (res.ok) return res.json();
                throw new Error(`${res.status}. ${res.statusText}`);
            })
            .then(data => {
                setCategories(data);
                // setCache((prevState) => ({ ...prevState, categories: data, }));
                // console.log(data);
            })
            .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
    }, [])
    //cache.categories
    if (categories.lenght == 0) return (<></>);

    return (
        <div className='filter'>
            <fieldset>
                <legend>Filter by:</legend>
                <ul>
                    {categories.map(cate =>
                        <li key={cate}>
                            <input onChange={handleChange} type="checkbox" id={cate} value={cate} checked={isChecked(cate)} />
                            <label htmlFor={cate}>{cate}</label>
                        </li>
                    )}
                </ul>
            </fieldset>
        </div>
    )
}

export default FilterBy

/* <li><input onChange={handleChange} type="checkbox" id="cbox1" value="electronics" /> <label htmlFor="cbox1">electronics</label></li>
<li><input onChange={handleChange} type="checkbox" id="cbox2" value="jewelery" /> <label htmlFor="cbox2">jewelery</label></li>
<li><input onChange={handleChange} type="checkbox" id="cbox3" value="men's clothing" /> <label htmlFor="cbox3">men's clothing</label></li>
<li><input onChange={handleChange} type="checkbox" id="cbox4" value="women's clothing" /> <label htmlFor="cbox4">women's clothing</label></li> */
