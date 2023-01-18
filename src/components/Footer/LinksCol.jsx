import { Link } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";

const LinksCol = ({ cols = 2, title, links }) => {
  return (
    <Grid item xs={cols} color="text.secondary" component="nav">
      <Typography variant="h6" mb={4} color="text.primary">
        {title}
      </Typography>

      <Stack component="ul" alignItems="flex-start" color="inherit">
        {links.map(({ href, to, text }) => (
          <Stack component="li">
            {/* If normal link */}
            {!!href && (
              <Button href={links.href} color="inherit">
                {text}
              </Button>
            )}
            {/* If route link */}
            {!!to && (
              <Stack component="li">
                <Link to={to}>
                  <Button color="inherit">{text}</Button>
                </Link>
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
};

export default LinksCol;
