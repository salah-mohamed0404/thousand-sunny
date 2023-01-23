import { CardContent, Rating, Stack, Typography } from "@mui/material";

const ProductContent = ({ title, price, discount, rating = 0 }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      <Rating value={parseFloat(rating.toFixed(1))} precision={0.1} readOnly />
      <Stack direction="row" spacing={2} mt={2} color="primary.main">
        <Typography
          variant="h6"
          component="div"
          fontWeight={500}
          sx={{ textDecoration: discount > 0 ? "line-through" : "none" }}
        >
          $ {price.toFixed(2)}
        </Typography>
        <Typography variant="h6" component="div" fontWeight={500}>
          $ {(price * ((discount - 1) / 100)).toFixed(2)}
        </Typography>
      </Stack>
    </CardContent>
  );
};

export default ProductContent;
