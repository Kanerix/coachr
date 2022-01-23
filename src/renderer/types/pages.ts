import type { SvgIconTypeMap } from "@mui/material"
import type { OverridableComponent } from "@mui/material/OverridableComponent"
import type { ReactNode } from "react"

export interface PageProps {
	name: string
	component: ReactNode
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
		muiName: string
	}
	path: string
	nav: boolean
}
