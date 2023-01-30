import { CardContent, Rating, Stack, Typography } from "@mui/material";

const ProductContent = ({ title, price, discount, rating = 0 }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Rating
          value={parseFloat(rating.toFixed(1))}
          precision={0.1}
          readOnly
        />
        <Typography variant="body2" color="text.secondary">
          ({rating.toFixed(1)})
        </Typography>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        columnGap={2}
        mt={2}
        color="primary.main"
      >
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
