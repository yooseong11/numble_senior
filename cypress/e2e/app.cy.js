
describe('"/" index page', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/')
	})

	it('첫 페이지가 나타난다.', () => {
		cy.get('.title').should('have.text', '당신의 인생 2막을 응원하는평생 금융파트너')
	})
	
	it('첫 화면을 클릭하면 다음 페이지로 넘어간다', () => {
		cy.get('#screen').click();
		cy.location('pathname').should('include', '/skipOrStart');
	})
})
