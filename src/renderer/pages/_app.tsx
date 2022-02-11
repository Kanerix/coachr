import {
	faChartLine,
	faClock,
	faGear,
	faHome,
	faTrophy,
} from '@fortawesome/free-solid-svg-icons'

import type { PageProps } from '../@types/pages'
import Achievements from './Achievments'
import Dash from './Dash'
import Goals from './Goals'
import Reminders from './Reminders'
import Settings from './Settings'

const pages: PageProps[] = [
	{
		name: 'Dashboard',
		component: <Dash />,
		icon: faHome,
		path: '/',
		nav: true,
	},
	{
		name: 'Goals',
		component: <Goals />,
		icon: faChartLine,
		path: '/goal',
		nav: true,
	},
	{
		name: 'Achievements',
		component: <Achievements />,
		icon: faTrophy,
		path: '/achievements',
		nav: true,
	},
	{
		name: 'Reminders',
		component: <Reminders />,
		icon: faClock,
		path: '/reminders',
		nav: true,
	},
	{
		name: 'Settings',
		component: <Settings />,
		icon: faGear,
		path: '/settings',
		nav: false,
	},
]

export default pages
