import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box marginBottom={20}>
      <AppBar className="shadow-none" color="transparent" position="static">
        <Container className="" maxWidth="xl">
          <Toolbar className="w-full p-0">
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={1}
              color={"#000"}
              className="no-underline"
            >
              <img src="assets/images/logo.png" />
              <span>A******</span>
            </Link>

            {/* Navigation Links */}
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <Button className="normal-case" color="inherit" href="#home">
                    Affiliate
                  </Button>
                  <Button className="normal-case" color="inherit" href="#link">
                    Pricing
                  </Button>
                  <Button className="normal-case" color="inherit" href="#home">
                    Help Center
                  </Button>
                  <Button className="normal-case" color="inherit" href="#link">
                    Blog
                  </Button>
                </Box>
                <Box display={"flex"} gap={"8px"}>
                  <Button
                    className="rounded-xl normal-case text-[#44444B] border-[#44444B]"
                    variant="outlined"
                  >
                    Login
                  </Button>
                  <Button
                    className="normal-case rounded-xl bg-gradient-to-r from-[#6F58FF] to-[#34008E]"
                    variant="contained"
                  >
                    Try for free
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
