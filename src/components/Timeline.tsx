import { Box, Container, Stack, Typography } from "@mui/material";
import { data } from "../assets/timeline-data";
import { galleryData } from "../assets/gallery-data";

const Timeline = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack justifyItems={"center"} spacing={20}>
          {data.map((item, key) => (
            <TimelineItem
              key={key}
              time={item.time}
              content={item.content}
              image={item?.image}
            />
          ))}
        </Stack>
      </Container>

      <Container className="mb-40" maxWidth="lg">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <div className="px-2 py-4 shadow-md rounded-[32px]" key={item.img}>
              <img
                className="lg:w-[352px] w-full mb-6 rounded-[16px]"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                className="text-center"
                variant="body1"
                fontSize={{ xs: 12, sm: 14 }}
              >
                {item.title}
              </Typography>
            </div>
          ))}
          <Box
            border={"1px solid #E4E4E7"}
            borderRadius={"32px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"32px"}
            paddingY={"16px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img className="w-1/2" src="assets/images/book-open.png" />
            <Box maxWidth={"200px"} textAlign={"center"}>
              <Typography fontSize={22} color={"#8D8C97"} variant="body1">
                {" "}
                {`2024 -> Onwards`}
              </Typography>
              <Typography fontSize={{ sx: 14, sm: 18, lg: 27 }} variant="body1">
                More memories to be made...
              </Typography>
            </Box>
          </Box>
        </div>
      </Container>
    </>
  );
};

type Props = {
  time: string;
  content: string;
  image?: string;
};
const TimelineItem = (props: Props) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        marginBottom={10}
        maxWidth={"530px"}
        borderTop={"1px solid #E4E4E7"}
        paddingY={1}
      >
        <span className="text-lg font-medium  text-[#8D8C97]">
          {props.time}
        </span>
        <Typography fontSize={18} color={"#44444B"} variant="body1">
          {props.content}
        </Typography>
      </Box>
      {props.image && <img className="max-sm:w-full" src={props.image} />}
    </Box>
  );
};

export default Timeline;
