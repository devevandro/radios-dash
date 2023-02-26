import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { getRadios } from "@/services/getRadios";
import ReactPlayer from "react-player";
import CircularIndeterminate from "../progress";

interface TabsComponentProps {
  state: string;
  region: string
}

export default function RadioTable(props: TabsComponentProps) {
  const { state, region } = props;
  const [rows, setRows] = useState<any[]>([]);
  const [play, setPlay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getRadios(state, region)
      .then((radios) => setRows(radios))
      .finally(() => setLoading(false));
  }, [region, state]);

  // useEffect(() => {
  //   <ReactPlayer url={url} />;
  // }, [url]);

  return (
    <>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Cidade</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Imagem</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.slice(0, 9).map((row, index) => (
                  <TableRow
                    key={row?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row?.name}</TableCell>
                    <TableCell>{row?.city}</TableCell>
                    <TableCell>{row?.state}</TableCell>
                    <TableCell>
                      <Avatar alt="Remy Sharp" src={row?.img} />
                    </TableCell>
                    <TableCell align="right">
                      <EditIcon
                        color="primary"
                        sx={{ marginRight: "10px", cursor: "pointer" }}
                        onClick={() => console.log("hands-edit")}
                      />
                      <DeleteIcon
                        color="error"
                        sx={{ cursor: "pointer" }}
                        onClick={() => console.log("hands-delete")}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
