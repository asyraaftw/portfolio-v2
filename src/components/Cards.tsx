import { Card, CardContent, Grid } from "@mui/material";
import { tools } from "./DummyData";

interface ICards {
  data?: typeof tools;
  langType?: string;
}

export default function Cards({ data = tools, langType }: ICards) {
  const filteredTools = langType
    ? data.filter((x) => x.type === langType)
    : data;

  return (
    <>
      <Grid container>
        {filteredTools?.map((x) => (
          <>
            <Grid size={6}>
              <Card
                variant="elevation"
                sx={{
                  borderRadius: 1,
                  height: "50%",
                  maxWidth: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // p: 2,
                }}
              >
                <CardContent>{x?.name}</CardContent>
              </Card>
            </Grid>
          </>
        ))}
        <Grid size={6}></Grid>
      </Grid>
    </>
  );
}
