import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  CardActionArea,
  CardActions,
  Tooltip,
} from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import { tools } from "./DummyData";

interface ICards {
  data?: typeof tools;
  langType?: string;
}

export default function Cards({ data = tools, langType }: ICards) {
  const filteredTools = langType
    ? data.filter((x) => x?.type === langType)
    : data;

  return (
    <Grid container spacing={2}>
      {filteredTools?.map((x, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              height: "100%",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea
              // onClick={() => window.open(x?.link, "_blank")}
              sx={{ height: "100%" }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {x?.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "center",
                    minHeight: 40,
                  }}
                >
                  {x?.language || "No description available"}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions sx={{ justifyContent: "center", pb: 1 }}>
              {/* {x?.link && (
                <Tooltip title="Open link">
                  <IconButton
                    onClick={() => window.open(x?.link, "_blank")}
                    size="small"
                  >
                    <FaExternalLinkAlt />
                  </IconButton>
                </Tooltip>
              )} */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
