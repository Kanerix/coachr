import ReactDOM from "react-dom";
import { Button } from "@mui/material";

function App() {
	return (
		<Button
			variant="contained"
			// @ts-ignore
			onClick={electron.notificationApi.notify("test")}
		>
			Hello World
		</Button>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
