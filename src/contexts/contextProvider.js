import React, { useEffect, useState, createContext } from 'react';



export const context = createContext();

export const ContextProvider = (props) => {

	const [cart, setCart] = useState([]);
	const [wishList, setWishList] = useState([]);

	useEffect(() => {
		const unsubscribe = () => {
			//do somethig
		}
	
		unsubscribe();
	

	}, []);

	const updateCart = (e) => {
		setCart(oldArray => [...oldArray, e])
	}

	const updateWishList = (e) => {
		setWishList(oldArray => [...oldArray, e])
	}


	return (
		<context.Provider value={{ cart, updateCart, wishList, updateWishList }}>
			{props.children}
		</context.Provider>

	);

}
