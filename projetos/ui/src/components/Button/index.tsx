import React, { ReactChild, ReactChildren } from 'react'

interface AuxProps {
  children: ReactChild | ReactChildren
}

export default function Button({ children }: AuxProps) {
	return (
		<button>
			{ children }
		</button>
	)
}