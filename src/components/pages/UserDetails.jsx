import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const idData = useLoaderData();
    const data = idData.meals[0];
    return (
        <>
            <div className="border-2 mx-10 border-orange-500  rounded-lg flex flex-col items-center justify-center space-y-3">
                <img src={data.strMealThumb} alt={data.strMeal} className="w-[300px] h-[300px] " />

                <h1 className="text-2xl font-bold">{data.strMeal}</h1>
                <h1 className="text-xl font-bold">{data.strCategory}</h1>
                <h1 className="text-xs font-semibold">{data.strArea}</h1>
                <p className="text-gray-500 font-bold text-ellipsis p-2">{data.strInstructions}</p>
            </div>
        </>
    );
};

export default UserDetails;
