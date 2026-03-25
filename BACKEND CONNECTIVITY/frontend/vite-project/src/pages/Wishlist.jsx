import {useEffect, useState} from 'react';
import axios from 'axios';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
        try {
            const response = await axios.get('http://localhost:4000/protected/rubini',
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            setWishlist(response.data);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    };
    fetchWishlist();
}, []);



  return (
    <div>
      <h1>My Wishlist</h1>
      <ul>
        {wishlist.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;