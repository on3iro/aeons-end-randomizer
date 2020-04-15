import React from 'react'
import P from 'components/atoms/P'
import SectionHeadline from 'components/atoms/SectionHeadline'

const SpecialRules = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SectionHeadline>Special rules:</SectionHeadline>
      <P>{children}</P>
    </>
  )
}

export default SpecialRules
