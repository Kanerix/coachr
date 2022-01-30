import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { ReactNode } from 'react'

export interface PageProps {
	name: string
	component: ReactNode
	icon: IconDefinition
	path: string
	nav: boolean
}
