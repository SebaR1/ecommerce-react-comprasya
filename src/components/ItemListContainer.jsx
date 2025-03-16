import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import ItemList from "./ItemList";

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, [categoryId]);

    return (
        <>
            <h1 className="py-5 text-color-home text-center d-flex justify-content-center align-items-center">
                {categoryId ? `${title} - ${categoryId}` : title}
            </h1>
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;