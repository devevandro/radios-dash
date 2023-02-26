import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import RadioTable from "@/components/radioTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface IState {
  id: number;
  label: string;
  name: string;
  region: string;
}

interface TabsComponentProps {
  states: IState[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent(props: TabsComponentProps) {
  const { states } = props;
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue, "hands");
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: 'flex', justifyContent: 'space-between' }}>
        <Tabs value={value}>
          {states?.map((state) => {
            return (
              <>
                <Tab
                  key={state?.label}
                  label={state?.label}
                  {...a11yProps(state?.id)}
                  onClick={(event) => handleChange(event, state?.id)}
                />
              </>
            );
          })}
        </Tabs>
        <AddCircleIcon
          color="success"
          sx={{ cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 20px 0 0' }}
          onClick={() => console.log("hands-edit")}
        />
      </Box>
      {states?.map((state) => {
        return (
          <>
            <TabPanel value={value} index={state?.id}>
              <RadioTable state={state?.name} region={state?.region} />
            </TabPanel>
          </>
        );
      })}
    </Box>
  );
}
