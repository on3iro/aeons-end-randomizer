import React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'Redux/Store'
import AERData from 'aer-data/src/index'
import { allKeywords } from './helpers'
import ListWrapper from 'components/molecules/ListWrapper'
import KeywordButton from './KeywordButton'

const ALL_KEYWORDS = allKeywords(Object.values(AERData.normalizedData.ENG.cards));
  
const mapStateToProps = (_: RootState) => ({
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const DeselectByKeyword = (_ : Props) => (
  <ListWrapper label="Deselect by Keyword" row={true}>
    <React.Fragment>
      {[...ALL_KEYWORDS].map((keyword) =>
          <KeywordButton key={keyword} keyword={keyword}></KeywordButton>)}
      </React.Fragment>
  </ListWrapper>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(DeselectByKeyword))
