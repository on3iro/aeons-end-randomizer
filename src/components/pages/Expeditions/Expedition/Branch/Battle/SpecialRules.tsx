import React from 'react'
import SectionHeadline from 'components/atoms/SectionHeadline'
import Li from 'components/atoms/Li'

const SpecialRules = ({ rules }: { rules: string[] }) => {
  return (
    <>
      <SectionHeadline>Special rules:</SectionHeadline>
      <ul>
        {rules.map(rule => (
          <Li key={rule}>{rule}</Li>
        ))}
      </ul>
    </>
  )
}

export default SpecialRules
