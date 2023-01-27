import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { AttachMoney, Bolt, LocalShipping } from "@mui/icons-material";

const Features = () => {
  return (
    <Box component="section">
      <Divider sx={{ bgcolor: "primary.light" }} />
      <Container>
        <Stack
          direction={{ md: "row" }}
          py={3}
          justifyContent="space-between"
          gap={2}
          component="ul"
        >
          {featuresContent.map(({ Icon, title, description }) => (
            <Stack
              key={title}
              direction="row"
              justifyContent={{ md: "center" }}
              alignItems="center"
              spacing={2}
              component="li"
            >
              <Avatar sx={{ color: "whitesmoke", bgcolor: "primary.light" }}>
                <Icon />
              </Avatar>
              <Stack>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Divider sx={{ bgcolor: "primary.light" }} />
    </Box>
  );
};

const featuresContent = [
  {
    Icon: LocalShipping,
    title: "Free shipping & return",
    description: "Free Shipping on all orders over $99",
  },
  {
    Icon: AttachMoney,
    title: "Money back guarantee",
    description: "100% Money back guarantee",
  },
  {
    Icon: Bolt,
    title: "Online support 24/7",
    description: "We always here for you",
  },
];

export default Features;
