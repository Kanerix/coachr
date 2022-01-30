import {
	CalendarTodayRounded,
	DashboardRounded,
	EmojiEventsRounded,
	FlagRounded,
} from "@mui/icons-material"

import type { PageProps } from "../types/pages"
import Achievements from "./Achievments"
import Dash from "./Dash"
import Goals from "./Goals"
import Reminders from "./Reminders"

const pages: PageProps[] = [
	{
		name: "Dashboard",
		component: Dash(),
		Icon: DashboardRounded,
		path: "/",
		nav: true,
	},
	{
		name: "Goals",
		component: Goals(),
		Icon: FlagRounded,
		path: "/goal",
		nav: true,
	},
	{
		name: "Achievements",
		component: Achievements(),
		Icon: EmojiEventsRounded,
		path: "/achievments",
		nav: true,
	},
	{
		name: "Reminders",
		component: Reminders(),
		Icon: CalendarTodayRounded,
		path: "/reminders",
		nav: true,
	},
]

export default pages
