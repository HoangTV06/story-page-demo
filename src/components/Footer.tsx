import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box paddingY={"120px"}>
        <Box
          justifyContent={"space-between"}
          alignItems={"center"}
          display={"flex"}
          marginBottom={5}
        >
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
          <Box>
            <button className="w-[147px] flex justify-between items-center rounded-[8px] py-2 px-1 bg-[#FCFCFD] border-[#E4E4E7] ">
              <span>English</span>
              <img src="assets/images/angle-down.svg" />
            </button>
          </Box>
        </Box>

        <Box
          display={{ xs: "block", sm: "flex" }}
          marginBottom={"80px"}
          justifyContent={"space-between"}
        >
          <Box className="grid grid-cols-2 md:grid-cols-3 gap-[68px] mb-10 sm:mb-0">
            <Box display={"flex"} gap={"24px"} flexDirection={"column"}>
              <Typography
                fontWeight={"semibold"}
                fontSize={14}
                variant="body1"
                color={"#44444B"}
              >
                Company
              </Typography>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Our Story
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Affiliate Program
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Roadmap
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Pricing
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Blog
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Contact us
              </Link>
            </Box>
            <Box display={"flex"} gap={"24px"} flexDirection={"column"}>
              <Typography
                fontWeight={"semibold"}
                fontSize={14}
                variant="body1"
                color={"#44444B"}
              >
                Resources
              </Typography>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Research Community
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Help Center
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                API Documentation
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Security
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Terms
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Privacy
              </Link>
            </Box>
            <Box display={"flex"} gap={"24px"} flexDirection={"column"}>
              <Typography
                fontWeight={"semibold"}
                fontSize={14}
                variant="body1"
                color={"#44444B"}
              >
                Compare
              </Typography>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Elicit.ai Alternative
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Consensus Alternative
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                ChatPDF Alternative
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                PDF.ai Alternative
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                Humata.ai Alternative
              </Link>
              <Link className="no-underline cursor-pointer text-[#8D8C97] text-sm">
                More Comparisons
              </Link>
            </Box>
          </Box>
          <div className="h-[1px] bg-[#E4E4E7] w-full sm:hidden mb-10"></div>
          <Box>
            <Typography
              fontSize={14}
              color={"#5D5C70"}
              textAlign={{ xs: "center", sm: "left" }}
              marginBottom={"24px"}
            >
              Copyright ©2023 A****** inc.️
            </Typography>
            <Box
              display={"flex"}
              gap={"20px"}
              justifyContent={{ xs: "center", sm: "flex-end" }}
              alignItems={"center"}
            >
              <img src="assets/images/linkedin-logo.png" />
              <img src="assets/images/youtube-logo.png" />
              <img src="assets/images/tiktok-logo.png" />
              <img src="assets/images/x-logo.png" />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} mb={"80px"} alignItems={"center"}>
          <div className="flex-1 h-[1px] bg-[#E4E4E7]"></div>
          <div className="rounded-md border border-black p-2 text-[#8D8C97]">
            A****** is backed by
          </div>
          <div className="flex-1 h-[1px] bg-[#E4E4E7]"></div>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          gap={"24px"}
          alignItems={"center"}
        >
          <img src="assets/images/image 22.png" />
          <img src="assets/images/image 46.png" />
          <img src="assets/images/Group 517.png" />
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
