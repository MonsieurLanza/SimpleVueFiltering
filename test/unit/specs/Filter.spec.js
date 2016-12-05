import Filter from 'src/Filter'
import TheData from 'src/data'

describe('Filter.js', () => {
  it('should return several entries', () => {
    var filter = new Filter(TheData)
    var results = filter.byStyles(['hip hop', 'rock'])
    expect(results).to.be.instanceof(Array)
    expect(results).to.not.be.empty
    expect(results).to.have.lengthOf(2)
    expect(results[0].style[0]).to.be.oneOf(['Hip Hop', 'Rock'])
    expect(results[1].style[0]).to.be.oneOf(['Hip Hop', 'Rock'])
    expect(results[0].style).to.not.eql(results[1].style)
  })
})
