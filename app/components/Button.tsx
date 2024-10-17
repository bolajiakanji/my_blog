import { Button as RadixButton } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'

const Button = ({ children }: PropsWithChildren) => {
  return (
      <>
          <RadixButton>{children}</RadixButton>
      </>
  )
}

export default Button