// ========== styles ==========
import classes from "./Table.module.css";

const Table = (props) => {
  let content;
  if (props.data.length === 0) {
    content = (
      <tr>
        <td colSpan="3">No Users Found</td>
      </tr>
    );
  } else {
    content = props.data.map((item) => (
      <tr key={item.id}>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
      </tr>
    ));
  }

  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {content}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
