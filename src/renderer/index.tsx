import ReactDOM from "react-dom";
import { Button } from "@mui/material";

function App() {
	const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Tester med din mor");
	};

	return (
		<Button variant="contained" onClick={notify}>
			Hello World
		</Button>
	);
}

ReactDOM.render(<App />, document.getElementById("app"));
