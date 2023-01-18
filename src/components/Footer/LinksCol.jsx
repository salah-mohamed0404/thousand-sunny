import { Link } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";

const LinksCol = ({ xs = 2, otherBreakPoints, title, links }) => {
  return (
    <Grid
      item
      xs={xs}
      {...otherBreakPoints}
      color="text.secondary"
      component="nav"
    >
      <Typography variant="h6" mb={4} color="text.primary">
        {title}
      </Typography>

      <Stack component="ul" alignItems="flex-start" color="inherit">
        {links.map(({ href, to, text }) => (
          <Stack
            component="li"
            sx={{ wordBreak: "break-word" }}
            key={text.concat(!!href ? href : to)}
          >
            {/* If normal link */}
            {!!href && (
              <Button
                href={links.href}
                color="inherit"
                sx={{ textAlign: "start" }}
              >
                {text}
              </Button>
            )}
            {/* If route link */}
            {!!to && (
              <Link to={to}>
                <Button color="inherit" sx={{ textAlign: "start" }}>
                  {text}
                </Button>
              </Link>
            )}
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
};

export default LinksCol;
