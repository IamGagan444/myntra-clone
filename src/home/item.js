import { Paper, Button } from "@mui/material";

const styles = {
  maxWidth: "100%",
  height: "300px",
};

function Item(props) {
  return (
    <Paper>
      <img src={props.item} style={styles} />
    </Paper>
  );
}

export default Item;
