import { Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ItemsContext } from "../../context/ItemsContext";
import { useContext } from "react";


export const CartWidget = () => {
  const { items, itemsCount } = useContext(ItemsContext);

  const value = Object.values(itemsCount);

  const suma = value.reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);



  return (
    <>
      <Badge badgeContent={ value ? suma : items.length} sx={{
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: "#393a49",
        }}
      }>
        <ShoppingCartOutlinedIcon sx={{ ml: 2, color: '#393a49' }} style={{ fontSize: 25 }} />
      </Badge>
    </>
  )
}
