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
  console.log(filteredTools, langType);

  return (
    <>
      <Grid container>
        {filteredTools?.map((x) => (
          <>
            <Grid size={6} p={1}>
              <Card
                variant="outlined"
                sx={{ maxWidth: "90%", borderRadius: 6, maxHeight: "90%" }}
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
