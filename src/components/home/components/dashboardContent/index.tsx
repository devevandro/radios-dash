import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AppBarComponent from "../appBarComponent";
import DrawerComponent from "../drawerComponent";
import { useRouter } from "next/router";
import RadiosSulComponent from "@/components/pages/radiosSul";
import RadiosCentroOesteComponent from "@/components/pages/radiosCentroOeste";
import RadiosSudesteComponent from "@/components/pages/radiosSudeste";
import RadiosNorteComponent from "@/components/pages/radiosNorte";
import RadiosNordesteComponent from "@/components/pages/radiosNordeste";

const mdTheme = createTheme();

export function DashboardContent() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const radiosComponent = [
    {
      path: "/radios-sul",
      component: <RadiosSulComponent />,
    },
    {
      path: "/radios-norte",
      component: <RadiosNorteComponent />,
    },
    {
      path: "/radios-sudeste",
      component: <RadiosSudesteComponent />,
    },
    {
      path: "/radios-nordeste",
      component: <RadiosNordesteComponent />,
    },
    {
      path: "/radios-centro-oeste",
      component: <RadiosCentroOesteComponent />,
    },
  ];

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarComponent toggleDrawer={toggleDrawer} open={open} />
        <DrawerComponent toggleDrawer={toggleDrawer} open={open} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 625,
                  }}
                >
                  {radiosComponent?.map(radiosComponent => {
                    return (
                      <>
                        {pathname === radiosComponent?.path && radiosComponent?.component}
                      </>
                    );
                  })}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
