import { faBullseye, faClock, faDashboard, faTrophy } from '@fortawesome/free-solid-svg-icons'

import type { PageProps } from '../types/pages'
import Achievements from './Achievments'
import Dash from './Dash'
import Goals from './Goals'
import Reminders from './Reminders'

const pages: PageProps[] = [
	{
<<<<<<< HEAD
		name: "Dashboard",
=======
		name: 'Dash',
>>>>>>> master
		component: Dash(),
		icon: faDashboard,
		path: '/',
		nav: true,
	},
	{
		name: 'Goals',
		component: Goals(),
		icon: faBullseye,
		path: '/goal',
		nav: true,
	},
	{
		name: 'Achievements',
		component: Achievements(),
		icon: faTrophy,
		path: '/achievments',
		nav: true,
	},
	{
		name: 'Reminders',
		component: Reminders(),
		icon: faClock,
		path: '/reminders',
		nav: true,
	},
]

export default pages
