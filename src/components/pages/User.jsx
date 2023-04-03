import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const { strMeal, strMealThumb, strCategory, strArea, idMeal } = props.data;
    return (
        <Link className="flex text-2xl font-bold text-black border-2 rounded-md border-orange-400 gap-6 m-10 flex-col justify-center items-center p-5" to={`/${idMeal}`}>
            <img src={strMealThumb} alt={strMeal} className="w-[200px] h-[250px]" />
            <h1>{strMeal}</h1>
            <h4>{strArea}</h4>
            <h4>{strCategory}</h4>
        </Link>
    );
};

export default User;
