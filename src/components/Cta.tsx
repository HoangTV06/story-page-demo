import { Box, Button, Typography } from "@mui/material";

const Cta = () => {
  return (
    <Box
      className="bg-no-repeat bg-cover bg-cta"
      paddingY={"40px"}
      position={"relative"}
    >
      {/* <img
        className="object-cover object-center lg:w-full"
        src="assets/images/Frame 2415.png"
      /> */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"68px"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"32px"}
        className="max-w-[667px] mx-auto "
      >
        <img src="assets/images/logo-big.png" />
        <Box textAlign={"center"}>
          <Typography
            fontWeight={"semibold"}
            fontSize={43}
            color={"#44444B"}
            variant="h3"
          >
            Become a part of the story
          </Typography>
          <Typography fontSize={27} color={"#8D8C97"} variant="body1">
            Apply to become a part of the beautiful story we are building here
            at A****** .
          </Typography>
        </Box>
        <Button
          className="rounded-[10px] normal-case bg-[#6F58FF]"
          variant="contained"
        >
          Apply now
        </Button>
      </Box>
    </Box>
  );
};

export default Cta;
