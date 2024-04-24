import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Hero = () => {
  return (
    <>
      <Container maxWidth="md" className="mb-40 ">
        <Grid padding={0} container gap={3} xs={12}>
          <Grid
            xs={12}
            columnSpacing={3}
            rowSpacing={{ xs: 3, md: 0 }}
            container
          >
            <Grid
              border={"1px solid #E4E4E7"}
              className="rounded-xl bg-[#F7F7F8]"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={{ xs: "12px", md: "24px" }}
              xl={4}
              sm={3}
              xs={6}
              order={1}
            >
              <Typography
                fontSize={{ xs: 34, lg: 53 }}
                color={"#44444B"}
                fontWeight={"semibold"}
                lineHeight={"1.4"}
                variant="body1"
              >
                2023
              </Typography>
              <Typography fontSize={"18px"} color={"#8D8C97"} variant="body1">
                A****** launched
              </Typography>
            </Grid>

            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              xs={6}
              sm={3}
              xl={2}
              order={{ xs: 3, sm: 2 }}
              padding={0}
            >
              <img className="w-full" src="assets/images/rocket.png" />
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              order={{ xs: 3, sm: 3 }}
              xs={6}
              sm={3}
              xl={4}
            >
              <img
                className="hidden w-full 2xl:block"
                src="assets/images/certs.png"
              />
              <img
                className="w-full 2xl:hidden"
                src="assets/images/certs-sm.png"
              />
            </Grid>
            <Grid
              padding={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"20px"}
              boxShadow={"0px 8px 24px rgba(0, 0, 0, 0.08)"}
              xl={2}
              sm={3}
              xs={6}
              order={{ xs: 2, sm: 4 }}
            >
              <img
                className="w-full h-auto rounded-xl"
                src="assets/images/image_3.png"
              />
            </Grid>
          </Grid>

          <Grid
            className="bg-[#F7F7F8] border border-[#E4E4E7]"
            borderRadius={"24px"}
            padding={3}
            textAlign={"center"}
            lg={12}
          >
            <Typography
              className="font-semibold leading-[1.4] text-[#44444B]"
              variant="h1"
              fontSize={{ xs: 27, sm: 32, md: 53 }}
            >
              Accelerate the world’s research one reference at a time.
            </Typography>
          </Grid>

          <Grid
            justifyContent={"space-between"}
            spacing={"24px"}
            rowSpacing={"32px"}
            container
            lg={12}
          >
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={0}
              xs={6}
              sm={4}
            >
              <img
                className="hidden w-full md:block"
                src="assets/images/Frame 2897.png"
              />
              <img
                className="w-full md:hidden"
                src="assets/images/Frame 2898.png"
              />
            </Grid>
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              boxShadow={"0px 8px 24px rgba(0, 0, 0, 0.08)"}
              borderRadius={"20px"}
              sm={2}
              xs={6}
            >
              <img className="w-full" src="assets/images/image 6.png" />
            </Grid>

            <Grid
              border={"1px solid #E4E4E7"}
              className="rounded-xl bg-[#F7F7F8]"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"24px"}
              sm={5}
              xs={12}
            >
              <Typography
                fontSize={{ xs: 34, lg: 53 }}
                color={"#44444B"}
                fontWeight={"semibold"}
                lineHeight={"1.4"}
                variant="body1"
              >
                $700,000+
              </Typography>
              <Typography fontSize={"18px"} color={"#8D8C97"} variant="body1">
                Raised in capital
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;
