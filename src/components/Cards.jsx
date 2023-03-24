import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useLoginContext } from "../context/LoginContext";
import Card from 'react-bootstrap/Card';

export default function Cards({ item }) {

  const { favorites, handleFavorites } = useFavoritesContext()
  const { user } = useLoginContext()
  const navigate = useNavigate()

  return (
    <Card className='m-auto w-100 a-zoom1 a-border1 bg-light text-white' role="button">
      <Card.Img className='CardImg cursor-pointer' variant="top" onClick={() => navigate(`../market/${item.id}`)} src={item.img} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title className='text-dark h6'>{item.title}</Card.Title>
        <div className='d-flex gap-2 justify-content-between align-items-center'>
          {user.logged ?

            <FaHeart className={`h3 m-0 z-2  ${!favorites.some((ele) => ele == item.id) ? "a-zoom2 " : "text-white active2 a-zoom1"} likeButton `} role="button" onClick={() => handleFavorites(item.id)} />

            : null
          }
          <div className='d-flex w-100 align-items-center justify-content-end gap-2 m-0 text-white'>
            <p className="m-0 price">Price:</p>
            <p className="price m-0 h4">${item.price}</p>

          </div>
        </div>
      </Card.Body>
    </Card >
  )
}