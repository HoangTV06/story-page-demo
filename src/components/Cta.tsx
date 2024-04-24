import { Box, Button, Typography } from "@mui/material";

const Cta = () => {
  return (
    <Box
      className="bg-no-repeat bg-cover bg-cta"
      paddingY={"40px"}
      position={"relative"}
    >
      <img
        className="absolute -left-[30px] top-[20px]
         w-[109.44px] h-[110.88px] xl:left-[300.43px] md:left-[100px] md:top-[66.45px] transform rotate-[31.13deg] rounded-[9.22px] [box-shadow:0px_2.7px_0.72px_0px_rgba(0,_0,_0,_0.19),0px_21.6px_5.76px_0px_rgba(0,_0,_0,_0.38)] bg-[rgb(252,_252,_253)]"
        src="assets/images/image 28.png"
      />
      <img
        className="absolute -left-[100px] w-[109.44px] h-[110.88px] md:-left-[22.52px] top-[235.12px] transform rotate-[8.01deg] rounded-[9.22px] [box-shadow:0px_2.7px_0.72px_0px_rgba(0,_0,_0,_0.19),0px_21.6px_5.76px_0px_rgba(0,_0,_0,_0.38)] bg-[rgb(252,_252,_253)]"
        src="assets/images/image 55.png"
      />
      <img
        className="absolute  w-[109.44px] h-[110.88px] -left-[80px] md:right-auto xl:left-[260.12px] md:left-[50px] top-[500px] xl:top-[378.77px] transform -rotate-[17.04deg] rounded-[9.22px] [box-shadow:0px_2.7px_0.72px_0px_rgba(0,_0,_0,_0.19),0px_21.6px_5.76px_0px_rgba(0,_0,_0,_0.38)] bg-[rgb(252,_252,_253)]"
        src="assets/images/image 53.png"
      />
      <img
        className="absolute -right-[50px] xl:left-[1045.37px] top-[498.68px] "
        src="assets/images/Frame 2705.png"
      />
      <img
        className="absolute  left-[1100.76px] top-[52.4px] "
        src="assets/images/Frame 2702.png"
      />
      <img
        className="absolute -right-[70px] top-[120px] xl:left-[1373.54px] xl:top-[185.1px] "
        src="assets/images/Frame 2706.png"
      />

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"68px"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"32px"}
        className="max-w-[667px] mx-auto bg-white "
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
