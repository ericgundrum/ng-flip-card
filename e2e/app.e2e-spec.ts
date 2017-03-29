import { CardShellPage } from './app.po'

describe('card-shell App', () => {
  let page: CardShellPage

  beforeEach(() => {
    page = new CardShellPage()
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('app works!')
  })
})
