import { ReactNode } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import { Sidebar } from '..'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid width="100%" gridTemplateColumns="230px auto">
      <GridItem height="100vh">
        <Sidebar />
      </GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  )
}

export { Layout }
