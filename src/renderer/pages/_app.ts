import {
	CalendarToday,
	Dashboard,
	EmojiEvents,
	Flag,
} from "@mui/icons-material"

import type { PageProps } from "../types/pages"
import Achievements from "./Achievments"
import Dash from "./Dash"
import Goals from "./Goals"
import Reminders from "./Reminders"

const pages: PageProps[] = [
	{
		name: "Dash",
		component: Dash(),
		Icon: Dashboard,
		path: "/",
		nav: true,
	},
	{
		name: "Goals",
		component: Goals(),
		Icon: Flag,
		path: "/goal",
		nav: true,
	},
	{
		name: "Achievements",
		component: Achievements(),
		Icon: EmojiEvents,
		path: "/achievments",
		nav: true,
	},
	{
		name: "Reminders",
		component: Reminders(),
		Icon: CalendarToday,
		path: "/reminders",
		nav: true,
	},
]

export default pages
