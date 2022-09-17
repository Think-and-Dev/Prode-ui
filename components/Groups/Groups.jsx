import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import GroupTable from "../GroupTable";
import groupsMock from "./groupsMock.json";

const useStyles = makeStyles(theme => ({
  customContainer: {
    maxHeight: "28rem",
    overflow: "auto"
  }
}))

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const classes = useStyles()

  const getGroups = async () => {
    return groupsMock;
  }

  useEffect(() => {
    (async () => {
      const _groups = await getGroups();
      setGroups(_groups);
    })()
  }, [])

  return (
    <div className={classes.customContainer}>
      <GroupTable groups={groups}/>
    </div>
  );
}

export default Groups;