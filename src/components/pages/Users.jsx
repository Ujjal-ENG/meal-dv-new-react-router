import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const loaderData = useLoaderData();
    return (
        <>
            <div className="flex flex-wrap gap-6 p-10">
                {loaderData.meals.map((el) => (
                    <User key={el.idMeal} data={el} />
                ))}
            </div>
        </>
    );
};

export default Users;
