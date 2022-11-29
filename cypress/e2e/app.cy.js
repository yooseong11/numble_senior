
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

describe('"/skipOrStart" page', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/skipOrStart')
	})

	it('시작 버튼을 클릭하면 온보딩 페이지로 넘어간다', () => {
		cy.get('.startButton').click();
		cy.location('pathname').should('include', '/onboarding/1');
	})

	it('스킵 버튼을 클릭하면 메인 페이지로 넘어간다', () => {
		cy.get('.skipButton').click();
		cy.location('pathname').should('include', '/main');
	})
})
