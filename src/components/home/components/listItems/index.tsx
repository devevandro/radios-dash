import { Fragment } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssistantIcon from "@mui/icons-material/Assistant";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LayersIcon from "@mui/icons-material/Layers";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Link from "next/link";

export const mainListItems = (
  <Fragment>
    <Link href="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link href="/radios-norte">
      <ListItemButton>
        <ListItemIcon>
          <AnalyticsIcon />
        </ListItemIcon>
        <ListItemText primary="Norte" />
      </ListItemButton>
    </Link>
    <Link href="/radios-nordeste">
      <ListItemButton>
        <ListItemIcon>
          <AssistantIcon />
        </ListItemIcon>
        <ListItemText primary="Nordeste" />
      </ListItemButton>
    </Link>
    <Link href="/radios-centro-oeste">
      <ListItemButton>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Centro-Oeste" />
      </ListItemButton>
    </Link>
    <Link href="/radios-sudeste">
      <ListItemButton>
        <ListItemIcon>
          <BeenhereIcon />
        </ListItemIcon>
        <ListItemText primary="Sudeste" />
      </ListItemButton>
    </Link>
    <Link href="/radios-sul">
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Sul" />
      </ListItemButton>
    </Link>
  </Fragment>
);
